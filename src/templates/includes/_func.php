<?php

include("./_assets-manifest.php");

/**
 * Get's the filename of a file built by webpack based on the chunk name
 */
function getWebpackBuiltFile($type, $chunkName) {
    $file = "";
    if ($type == "js") {
        $file = WebpackBuiltFiles::$jsFiles[$chunkName];
    } else if ($type == "css") {
        $file = WebpackBuiltFiles::$cssFiles[$chunkName];
    }
    return wire("config")->urls->root.$file;
}