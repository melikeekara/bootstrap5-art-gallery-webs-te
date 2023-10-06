<script>
  $(document).ready(function() {
    const imageUrls = [
      "resimler/resim1.jpg",
      "resimler/resim2.jpg",
      "resimler/resim3.jpg",
      // Diğer resimlerin URL'lerini burada listeye ekleyin
    ];

    const rowSize = 4; // Her satırdaki resim sayısı
    let currentRow = $("<div class='row'></div>");
    $("#image-row").append(currentRow);

    imageUrls.forEach((url, index) => {
      const image = new Image();
      image.src = url;

      image.onload = function() {
        const aspectRatio = image.width / image.height;
        const colClass = `col-md-${12 / rowSize}`;

        const imgTag = `<img src="${url}" class="img-fluid mb-4">`;
        const colTag = `<div class="${colClass}">${imgTag}</div>`;
        currentRow.append(colTag);

        if ((index + 1) % rowSize === 0) {
          currentRow = $("<div class='row'></div>");
          $("#image-row").append(currentRow);
        }
      };
    });
  });
</script>
