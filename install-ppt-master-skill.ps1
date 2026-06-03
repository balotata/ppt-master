$ErrorActionPreference = "Stop"

$source = Join-Path $PSScriptRoot "ppt-master"
$destRoot = Join-Path $env:USERPROFILE ".codex\skills"
$dest = Join-Path $destRoot "ppt-master"

if (!(Test-Path -LiteralPath $source)) {
  throw "Source skill not found: $source"
}

New-Item -ItemType Directory -Force -Path $destRoot | Out-Null
if (Test-Path -LiteralPath $dest) {
  Remove-Item -LiteralPath $dest -Recurse -Force
}
Copy-Item -LiteralPath $source -Destination $dest -Recurse -Force

Write-Host "Installed ppt-master skill to $dest"
