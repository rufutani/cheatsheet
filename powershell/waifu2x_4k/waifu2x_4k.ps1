
# 設定

$movieWidth = 3840 # 変換後の横サイズ
$movieHeight = 2160 # 変換後の縦サイズ

$ffmpegPath = (Get-Command ffmpeg).Source # ffmpeg.exeのパス
$ffprobePath = (Get-Command ffprobe).Source # ffprobe.exeのパス
$waifu2xCaffeCui = (Get-Command waifu2x-caffe-cui).Source # waifu2x-caffe-cui.exeのパス

$inputFolder = (Get-Location).Path # 入力ディレクトリ
$outputFolder = (Get-Location).Path + '\output' # 出力ディレクトリ
$fileType = ('*.mp4','*.avi','*.mkv') # 処理対象の拡張子
$tmpFolder = (Get-Location).Path + '\temp' # 作業用フォルダ(一時的に画像等を展開するため、それなりの容量が必要)

# Waifu2xCaffeのオプション
# オプションについては公開元をご参照ください
# https://github.com/lltcggie/waifu2x-caffe
$noiseScaleMode = 'noise_scale'
$noiseLevel = 1
$processType = 'gpu'
$cropSize = 512
$modelDir = 'models/upconv_7_anime_style_art_rgb'

##
# 以下処理

$tmpSourceImageFolder = $tmpFolder + '\movie2x\img_s'
$tmpSourceImageFiles = $tmpSourceImageFolder + '\img_%07d.jpg'
$tmpConvertImageFolder = $tmpFolder + '\movie2x\img_c'
$tmpConvertImageFiles = $tmpConvertImageFolder + '\img_%07d.png'
$tmpSourceWaveFile = $tmpFolder + '\movie2x\base.wav'

function RunProcess($exePathe, $argObj){
  $pinfo = New-Object System.Diagnostics.ProcessStartInfo
  $pinfo.RedirectStandardOutput = $true
  $pinfo.UseShellExecute = $false
  $p = New-Object System.Diagnostics.Process

  $pinfo.FileName = $exePathe
  $pinfo.Arguments = $argObj
  $p.StartInfo = $pinfo
  $p.Start() | Out-Null

  Write-Output $p
}

Remove-Item $tmpSourceImageFolder -recurse 2> $null
Remove-Item $tmpConvertImageFolder -recurse 2> $null
Remove-Item $tmpSourceWaveFile 2> $null

Get-ChildItem -Path $inputFolder -Recurse -Include $fileType | ForEach-Object {
  $date = Get-Date -Format "yyyy/MM/dd HH:mm"
  Write-Host "$date ファイル : $_ の処理を開始しました。" 

  ###
  # 動画の情報をffprobeで取得
  $expArg = '"' + $_.Fullname + '" -show_entries format -show_streams -print_format json'
  $process = RunProcess $ffprobePath $expArg

  $stdout = $process.StandardOutput.ReadToEnd()
  $json = $stdout | ConvertFrom-Json

  $fpsStrings = $json.streams[0].avg_frame_rate -split '/'
  $fps = $fpsStrings[0] / $fpsStrings[1]
  $sourceMovieWidth = $json.streams[0].width
  $sourceMovieHeight = $json.streams[0].height

  ##
  # 作業ディレクトリの作成
  New-Item $tmpSourceImageFolder -type directory -Force | Out-Null
  New-Item $tmpConvertImageFolder -type directory -Force | Out-Null

  ##
  #ffmpegにより音声/画像の分離
  $expArg = ' -i "' + $_.Fullname + '" -vn "' + $tmpSourceWaveFile

  $process = RunProcess $ffmpegPath $expArg
  $process.WaitForExit()

  $expArg = ' -i "' + $_.Fullname + '" -f image2 -vcodec mjpeg -qscale 1 -qmin 1 -qmax 1 "' + $tmpSourceImageFiles

  $process = RunProcess $ffmpegPath $expArg
  $process.WaitForExit()

  ##
  #widthとheightのどちらに合わせるべきか判定
  if($movieWidth / $sourceMovieWidth -lt $movieHeight / $sourceMovieHeight){
    $scaleString = ' --scale_width ' + $movieWidth
  }else{
    $scaleString = ' --scale_height ' + $movieHeight
  }

  ##
  # waifu2x-caffeによる画像の拡大とノイズ除去
  $expArg = ' -i ' + $tmpSourceImageFolder + ' -o ' + $tmpConvertImageFolder + ' --model_dir ' + $modelDir + ' -m ' + $noiseScaleMode + $scaleString +' --noise_level ' + $noiseLevel + ' -p ' + $processType + ' -c ' + $cropSize

  $process = RunProcess $waifu2xCaffeCui $expArg
  $process.WaitForExit()

  ##
  # ffmpegにより画像と音声を結合してmp4(H264)の動画に変換
  $expArg = ' -r ' + $fps + ' -i "' + $tmpConvertImageFiles + '" -i "' + $tmpSourceWaveFile + '" -f mp4 -vcodec libx264 -bufsize 20000k -maxrate 25000k -s ' + $movieWidth + 'x' + $movieHeight + ' -aspect ' + $sourceMovieWidth + ':' + $sourceMovieHeight + ' -pix_fmt yuv420p "' + $outputFolder + '\' + $_.Name + '"'

  $process = RunProcess $ffmpegPath $expArg
  $process.WaitForExit()

  Remove-Item $tmpSourceImageFolder -recurse 2> $null
  Remove-Item $tmpConvertImageFolder -recurse 2> $null
  Remove-Item $tmpSourceWaveFile 2> $null

  $date = Get-Date -Format "yyyy/MM/dd HH:mm"
  Write-Host "$date ファイル : $_ の処理が完了しました。" 
}