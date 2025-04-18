import React, { useRef, useState } from "react";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { CloseCircle, ArrowRight, ClipboardTick } from "iconsax-react";

const UploadReport = () => {
    const fileInputRef = useRef(null);
    const [uploadStatus, setUploadStatus] = useState(null); // null, 'success', or 'failure'
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState(0);

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const allowedTypes = [".pdf"];
        const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

        if (!allowedTypes.includes(fileExtension)) {
            alert("Invalid file type. Please upload a .pdf file.");
            event.target.value = ""; // Clear the file input
            setUploadStatus('failure');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("File size exceeds the 10MB limit.");
            event.target.value = "";
            setUploadStatus('failure');
            return;
        }

        // Simulate upload logic
        setTimeout(() => {
            setUploadStatus('success');
            setFileName(file.name);
            setFileSize(file.size);
        }, 1000);

        console.log("Selected file:", file);
        // continue with upload logic
    };

    return (
        <div className="container h-[95%] p-4 bg-white rounded-2xl my-4 mr-2 z-10">
            <h1 className="text-2xl font-bold text-h1 mb-2">Upload Report</h1>
            <p className="text-h2 mb-4">Easily add and manage your daily stock reports.</p>
            <button className="flex items-center text-blue font-medium text-sm mb-6 bg-transparent hover:bg-transparent hover:border-transparent focus:outline-none cursor-default">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="hover:underline cursor-pointer">Back to Inventory Tracking</span>
            </button>

            {/* Upload box */}
            <div className="min-h-[30vh] border-2 border-dashed bg-[#FDFDFE] border-blue rounded-xl flex flex-col items-center justify-center p-12 text-center mb-6" style={{ width: '100%' }}>
                <UploadCloud className="w-8 h-8 text-blue mb-2" />
                <p className="text-sm text-gray-600">
                    Drag your file(s) or{" "}
                    <span
                        className="text-blue cursor-pointer font-medium underline"
                        onClick={handleBrowseClick}>
                        browse
                    </span>
                </p>
                {/* Hidden file input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
                <p className="text-xs text-gray-400 mt-1">Max 10 MB files are allowed</p>
            </div>

            {/* Upload status */}
            {uploadStatus === 'success' && (
                <div className="flex flex-col items-start justify-center text-left mb-6" style={{ width: '100%' }}>
                    <div className="bg-transparent px-4 py-2 rounded-xl text-sm border-2 border-[#03B168] mb-6 flex flex-row justify-between items-center" style={{ width: '100%' }}>
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">Products List</p>
                            <p>500Kb</p>
                        </div>
                        <CloseCircle size="16" color="#03B168" />
                    </div>
                    <div className="bg-[#b2d6be] p-4 rounded-xl text-sm text-black mb-6" style={{ width: '100%' }}>
                        <p className="text-left font-bold">The report has been uploaded successfully!</p>
                        <div className="flex flex-row items-end justify-start gap-3">
                            <p>See product list!</p>
                            <ArrowRight size="14" color="#000000" />
                        </div>
                    </div>
                </div>
            )}

            {uploadStatus === 'failure' && (
                <div className="bg-[#FDECEC] p-4 rounded-xl text-sm text-red-700 mb-6" style={{ width: '100%' }}>
                    <p>The report could not be uploaded. Please try again.</p>
                </div>
            )}

            {/* Instructions */}
            {!uploadStatus && (
                <div className="bg-[#F3F8FF] p-5 rounded-xl text-sm text-gray-700">
                    <h2 className="font-semibold mb-2">How to Upload Your Report</h2>
                    <p className="text-[#6B7280] mb-4">Please follow the guidelines below before uploading your file.</p>

                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center mr-2">
                                <ClipboardTick size="16" color="#FFFFFF" />
                            </span>
                            <span>
                                <strong>Recommended file name:</strong> Report_Stock_DayX.pdf.
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center mr-2">
                                <ClipboardTick size="16" color="#FFFFFF" />
                            </span>
                            <span>
                                <strong>Accepted formats:</strong> PDF.
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center mr-2">
                                <ClipboardTick size="16" color="#FFFFFF" />
                            </span>
                            <span>
                                <strong>Maximum file size:</strong> 10MB.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-4 text-xs text-[#6B7280]">
                        Your data is protected and remains confidential. <br />
                        Uploading a new file will replace the previously uploaded one.
                    </p>
                </div>
            )}
        </div>
    );
};

export default UploadReport;
