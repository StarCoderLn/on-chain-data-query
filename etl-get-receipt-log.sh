#!/bin/bash
source .env

ethereumetl export_receipts_and_logs --transaction-hashes transaction_hashes.txt \
 --receipts-output receipts.csv --logs-output logs.csv \
 --provider-uri $API_KEY