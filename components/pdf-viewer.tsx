import React from "react";

type PdfViewerProps = React.HTMLProps<HTMLObjectElement>;

const PdfViewer: React.FC<PdfViewerProps> = ({ data, ...rest }) => {
  return (
    <div className="w-full h-[100vh] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <object
        data={data}
        type="application/pdf"
        className="w-full h-full border-none"
        {...rest}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <p className="text-gray-600 mb-4">
            Your browser does not support PDFs.
          </p>
          <a
            href={data}
            download
            className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-md shadow-md hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300"
          >
            Download the PDF
          </a>
        </div>
      </object>
    </div>
  );
};

export default PdfViewer;
