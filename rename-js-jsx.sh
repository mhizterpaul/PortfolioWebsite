#!/bin/bash

echo "Starting React import-based .js to .jsx conversion from ./src..."

# Find all .js files within the ./src directory and its subdirectories,
# excluding any 'assets' directories.
find ./src -type f -name "*.js" -not -path "*/assets/*" | while read -r filepath; do
    # Check if the file contains an import statement for 'react'
    # This covers common ES Module import patterns like:
    # - import React from 'react';
    # - import { useState, useEffect } from "react";
    # - import * as React from 'react';
    # - import 'react'; (for side effects or global setup)
    # It explicitly EXCLUDES CommonJS 'require('react')' statements as per your instruction.
    if grep -qE "import .* from ['\"]react['\"]|import ['\"]react['\"]" "$filepath"; then

        # Get the directory and filename without extension
        dir=$(dirname "$filepath")
        filename=$(basename "$filepath" .js)

        # Construct the new filepath with .jsx extension
        newfilepath="${dir}/${filename}.jsx"

        # Rename the file
        mv "$filepath" "$newfilepath"
        echo "Renamed: $filepath -> $newfilepath"
    fi
done

echo "Conversion complete."