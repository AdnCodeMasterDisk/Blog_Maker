const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlogMaker</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
`;

const end = `
</body>
</html>
`;

function downloadInnerHtml(filename, mimeType) {
    var htmlcont = html;

    var link = document.createElement('a');

    var selectcode = document.querySelector('#constructor').innerHTML;
    var endcont = end;

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(htmlcont) +
        encodeURIComponent(selectcode) + encodeURIComponent(endcont));
    link.click();

};

var fileName = 'post.html'; // You can use the .txt extension if you want

$('#downloadbtn').click(function () {
    downloadInnerHtml(fileName, 'main', 'text/html');
});