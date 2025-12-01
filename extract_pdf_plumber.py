import pdfplumber

try:
    pdf_path = r'f:\work\Black Gold\teachers interviews\teachers assessment\project description.pdf'
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Number of pages: {len(pdf.pages)}")
        print("=" * 80)
        
        for i, page in enumerate(pdf.pages):
            print(f"\n--- Page {i+1} ---\n")
            text = page.extract_text()
            if text:
                print(text)
            else:
                print("[No text extracted from this page]")
            print("\n" + "=" * 80)
except Exception as e:
    print(f"Error: {e}")
