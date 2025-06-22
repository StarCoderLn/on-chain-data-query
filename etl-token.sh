#!/bin/bash
source .env

ethereumetl export_token_transfers --start-block 22431000 --end-block 22431080 \
 --output token_transfers.csv \
 --tokens 0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490 \
 --provider-uri $API_KEY