#import libraries

from bs4 import BeautifulSoup
import requests
import time
import datetime

import smtplib

# Connect to the website
URL = 'https://www.amazon.com/deal/a94574e1?showVariations=false&ref=dlx_deals_gd_dcl_img_0_a94574e1_dt_sl15_c5'
headers = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"}

page=requests.get(URL, headers=headers)