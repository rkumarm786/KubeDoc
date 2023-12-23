#!/bin/sh

# Start Nginx in the foreground
exec nginx -g 'daemon off;'

# Reload nginx to update config
exec nginx -s reload