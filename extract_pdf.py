import PyPDF2
import sys

try:
    pdf_path = r'f:\work\Black Gold\teachers interviews\teachers assessment\project description.pdf'
    with open(pdf_path, 'rb') as pdf_file:
        reader = PyPDF2.PdfReader(pdf_file)
        print(f"Number of pages: {len(reader.pages)}")
        print("=" * 80)
        
        for i, page in enumerate(reader.pages):
            print(f"\n--- Page {i+1} ---\n")
            text = page.extract_text()
            if text:
                print(text)
            else:
                print("[No text extracted from this page]")
            print("\n" + "=" * 80)
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
