import sys
from mega.mega import Mega
mega = Mega()
try:
    email, password, url = sys.argv[1], sys.argv[2], sys.argv[3]
    m = mega.login(email, password)
    url_info = m.get_public_url_info(sys.argv[3])
    download_url = m.download_url(sys.argv[3])
    print([url_info, download_url])
    # print(f"{email} {password} {url} {download_url}")

except Exception as e:
    pass
    print(f"Error logging into your mega account: {e}")
