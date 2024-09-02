document.getElementById('download').addEventListener('click', function() {
    html2canvas(document.getElementById('secao-download'), { useCORS: true }).then(canvas => {
        const linkDownload = document.createElement('a');
        linkDownload.href = canvas.toDataURL('image/png');
        linkDownload.download = 'imagem-casa.png';
        linkDownload.click();
    });
});