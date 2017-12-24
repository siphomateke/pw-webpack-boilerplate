<?php

include("./_assets-manifest.php");

/**
 * Get's the filename of a file built by webpack based on the chunk name
 */
function getWebpackChunk($type, $chunkName) {
    $array = null;
    if ($type == "js") {
        $array = WebpackBuiltFiles::$jsFiles;
    } else if ($type == "css") {
        $array = WebpackBuiltFiles::$cssFiles;
    }

    if (array_key_exists($chunkName, $array)) {
        return wire("config")->urls->root.$array[$chunkName];
    } else {
        return null;
    }
}

function loadWebpackChunk($type, $chunkName) {
    $chunk = getWebpackChunk($type, $chunkName);
    if (!is_null($chunk)) {
        if ($type == "js") {
            return "<script type='text/javascript' src='".$chunk."'></script>";
        } else if ($type == "css") {
            return "<link rel='stylesheet' type='text/css' href='".$chunk."'>";
        }
    }
    return null;
}

function loadWebpackChunks($type, $chunkNames) {
    $str = "";
    foreach ($chunkNames as $chunkName) {
        $result = loadWebpackChunk($type, $chunkName);
        if (!is_null($result)) {
            $str .= $result;
        }
    }
    return $str;
}