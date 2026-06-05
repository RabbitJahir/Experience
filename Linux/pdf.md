>```bash
> sudo apt install ghostscript
>```
> reduce pdf file size
>```bash
> gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
>``` 


> # Poppler-utils Cheat Sheet (Linux PDF Tools)
> 
> ## Install
> ```bash
> sudo apt install poppler-utils
> ```
> 
> ---
> 
> ## Merge PDFs
> > - `pdfunite file1.pdf file2.pdf file3.pdf output.pdf`
> 
> ---
> 
> ## Split PDF into pages
> - `pdfseparate input.pdf page-%d.pdf`
> 
> Example:
> - `pdfseparate file.pdf page-%d.pdf`
> 
> ---
> 
> ## Convert PDF to text
> - `pdftotext file.pdf output.txt`
> 
> ### Preserve layout
> - `pdftotext -layout file.pdf output.txt`
> 
> ### Extract specific pages
> - `pdftotext -f 1 -l 3 file.pdf output.txt`
> 
> ---
> 
> ## Convert PDF to images (PNG/JPG)
> - `pdftoppm file.pdf output_name -png`
> - `pdftoppm file.pdf output_name -jpeg`
> 
> Example:
> - `pdftoppm file.pdf page -png`
> 
> ---
> 
> ## High-quality PDF to image (Cairo backend)
> - `pdftocairo -png file.pdf output`
> 
> Other formats:
> - `pdftocairo -jpeg file.pdf output`
> - `pdftocairo -pdf file.pdf output.pdf`
> 
> ---
> 
> ## Get PDF information
> - `pdfinfo file.pdf`
> 
> Shows:
> - pages
> - size
> - title
> - author
> - creation date
> 
> ---
> 
> ## Extract images from PDF
> - `pdfimages file.pdf image_prefix`
> 
> Example:
> - `pdfimages file.pdf img`
> 
> Output:
> - `img-000.png`, `img-001.jpg`, etc.
> 
> ---
> 
> ## List fonts used in PDF
> - `pdffonts file.pdf`
> 
> ---
> 
> ## Extract attachments from PDF
> - `pdfdetach -list file.pdf`
> 
> Extract:
> - `pdfdetach -saveall file.pdf`
> 
> ---
> 
> ## Crop / render pages (advanced)
> - `pdftocairo -png -x 100 -y 100 -W 800 -H 600 file.pdf output`
> 
> ---
> 
> ## Convert PDF to PS (PostScript)
> - `pdftops file.pdf output.ps`
> 
> ---
> 
> ## Convert PS back to PDF
> - `ps2pdf input.ps output.pdf`
> 
> ---
> 
> ## Quick workflow examples
> 
> ### Convert PDF to editable text
> - `pdftotext -layout file.pdf`
> 
> ### Convert PDF to images for each page
> - `pdftoppm file.pdf page -png`
> 
> ### Merge multiple PDFs
> - `pdfunite a.pdf b.pdf c.pdf merged.pdf`
> 
> ### Split PDF into pages
> - `pdfseparate file.pdf page-%d.pdf`
> 
> ---
> ```

> img2pdf, convert(converts any formats),
> pdftoppm(breaks the pdf pages to images).
> pdftoppm, converts images to pdf, and breaks pdf to images.
> qpdf "name_of.pdf" --pages . 01-101 -- name_of_new.pdf (breaks the pages of the pdf to a new pdf).
> convert, (sudo apt isntall imagemagick)