> `sudo apt install ghostscript`
>```bash
> gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
>``` 
> reduce pdf file size

> `sudo apt install poppler-utils`
> - pdfunite first.pdf second.pdf third.pdf merged.pdf

> img2pdf, convert(converts any formats),
> pdftoppm(breaks the pdf pages to images).
> pdftoppm, converts images to pdf, and breaks pdf to images.
> qpdf "name_of.pdf" --pages . 01-101 -- name_of_new.pdf (breaks the pages of the pdf to a new pdf).
> convert, (sudo apt isntall imagemagick)