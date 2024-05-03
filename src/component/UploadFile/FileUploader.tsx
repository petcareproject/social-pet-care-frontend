// const options = {
//   apiKey: "free",
//   maxFileCount: 1,
//   showFinishButton: true,
//   styles: {
//     colors: {
//       primary: "#377dff",
//     },
//   },
// };

// const MyDropzone = ({ setFiles }) => (
//   <UploadDropzone
//     options={options}
//     onUpdate={({ uploadedFiles }) =>
//       console.log(`Files: ${uploadedFiles.map((x) => x.fileUrl).join("\n")}`)
//     }
//     onComplete={setFiles}
//     width="600px"
//     height="375px"
//     uploader={undefined}
//   />
// );

// const MyUploadedFiles = ({ files }) =>
//   files.map((file) => {
//     const { filePath, accountId } = file;
//     const fileUrl = UrlBuilder.url({
//       filePath,
//       accountId,
//       options: {
//         transformation: "preset",
//         transformationPreset: "thumbnail",
//       },
//     });
//     return (
//       <p key={fileUrl}>
//         <a href={fileUrl} target="_blank">
//           {fileUrl}
//         </a>
//       </p>
//     );
//   });

// const FileUploader = () => {
//   const [files, setFiles] = useState([]);
//   return (
//     <>
//       {files.length ? (
//         <MyUploadedFiles files={files} />
//       ) : (
//         <MyDropzone setFiles={setFiles} />
//       )}
//       <a
//         className="developed_by"
//         href="https://www.bytescale.com/docs/upload-widget/react"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Powered by Bytescale
//       </a>
//     </>
//   );
// };
// export default FileUploader;

import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";

const uploader = Uploader({
	apiKey: "free",
});

const options = { multi: false };

const FileUploader = () => (
	<UploadButton
		uploader={uploader}
		options={options}
		onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}>
		{({ onClick }) => (
			<button
				type="button"
				onClick={onClick}
				className="border-2 border-[#FFE3E3] px-8 py-4 rounded-md font-semibold">
				Browser File
			</button>
		)}
	</UploadButton>
);

export default FileUploader;
