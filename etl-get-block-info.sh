#!/bin/bash
source .env

ethereumetl export_blocks_and_transactions --start-block 22431083 --end-block 22431083 \
 --blocks-output blocks.csv --transactions-output transactions.csv \
 --provider-uri $API_KEY