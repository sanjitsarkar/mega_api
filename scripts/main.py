import sys
from mega.mega import Mega
mega = Mega()
try:
    m = mega.login(sys.argv[1], sys.argv[2])
    url = m.download_url(
        "https://mega.nz/file/bXwRlICb#U2HdGT-JQS1AGtPcz8uAynajK4QPN-JucxYTpIaPv4I")
    print(url.split())

except Exception as e:
    pass
    # print(f"Error logging into your mega account: {e}")
