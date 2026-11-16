$src = 'C:\Users\DELL\.gemini\antigravity\brain\b611cfca-1c03-443f-ae8d-c6c398d0d87d\.user_uploaded'
$dst = 'C:\Users\DELL\Downloads\aashish-enterprises-site\aashish-enterprises-site\assets'

Copy-Item "$src\media_1794824863318_a64e0465.jpg" "$dst\gallery-warehouse.jpg" -Force
Copy-Item "$src\media_1794824884514_793993d2.jpg" "$dst\gallery-unloading.jpg" -Force
Copy-Item "$src\media_1794824904295_45af9177.jpg" "$dst\gallery-team2.jpg" -Force
Copy-Item "$src\media_1794824936030_52e7c152.jpg" "$dst\gallery-owner.jpg" -Force
Copy-Item "$src\media_1794824993162_1947981b.mp4" "$dst\gallery-video2.mp4" -Force

Write-Host "Done copying gallery assets."
