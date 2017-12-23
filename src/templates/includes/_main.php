<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv='content-type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title data-pw-id='title'>Title</title>

        <script type='text/javascript' src='<?=getWebpackBuiltFile("js","manifest")?>'></script>
        <script type='text/javascript' src='<?=getWebpackBuiltFile("js","main")?>'></script>
        <link rel='stylesheet' type='text/css' href='<?=getWebpackBuiltFile("css","main")?>'>

        <region data-pw-id='head'></region>
    </head>

    <body>
        <main data-pw-id='main'></main>
        <footer data-pw-id='footer'></footer>
        <region data-pw-id='scripts'></region>
    </body>
</html>
