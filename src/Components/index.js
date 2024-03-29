import React, { useState, useEffect } from 'react'
import { REQUEST_TYPE, UPLOADS } from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';




const Index = () => {

	const [fileName, setFileName] = useState();
	const [files, setFiles] = useState("");
	const [loader, setloader] = useState(true);
	const [success, setSuccess] = useState(false);
	const [message, setmessage] = useState({
		error:"",
		success:""
	})
	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		console.log('====================================');
		console.log(selectedFile.name);
		console.log('====================================');
		setFileName(selectedFile.name);

		const fileReader = new FileReader();
		fileReader.readAsText(e.target.files[0], "UTF-8");
		fileReader.onload = e => {
			console.log("e.target.result", e.target.result);
			setFiles(e.target.result);
		};
	};

	const removeMessage = () =>{
		setTimeout(()=>{
			setmessage(preState=>({...preState,error:"",success:""}));
		},10000)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setloader(false);
		let parmas = files;
		apiCall(UPLOADS.add, REQUEST_TYPE.POST, parmas).then(async (results) => {
			if(await results.response.data.statusCode==201){
				setloader(true);
				setSuccess(false)
				setFiles("");
				setFileName("");
				setmessage(preState=>({...preState, error:results.response.data.message}))
				removeMessage();
			}else{
				console.log('====================================');
				console.log(JSON.parse(results.response.data.message));
				console.log('====================================');
				setmessage(preState=>({...preState, success:"Please download json file"}))
				setloader(true);
				setSuccess(true)
				removeMessage();
			}
			console.log(results)
			
		})
		// setloader(true);
	};

	const getFiledata = async () => {
		apiCall(UPLOADS.add, REQUEST_TYPE.GET).then(async (response) => {
			console.log(response.response.data);
			const jsonContent = JSON.stringify(response.response.data);
			const blob = new Blob([jsonContent], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'downloadedFile.json'); // Change the file name as needed
			document.body.appendChild(link);
			link.click();
			link.parentNode.removeChild(link);
			setFileName();
			setSuccess(false)
		})
	}

	return (<>
		<div className="container">

			<div className="card">
				<h3>Upload Files</h3>
				<div className="drop_box">

					<header>
						<h4>{fileName ? fileName : 'Select File here'}</h4>
					</header>
					<p>Files Supported: .JSON</p>
					<input
						type="file"
						accept=".json"
						id="fileID"
						style={{ display: 'none' }}
						onChange={handleFileChange}
					/>
					{success == true ? (<label className="btn" onClick={getFiledata}>
						Download File
					</label>) :
						<>{fileName ?
							<form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
								<div className="form">
									<button type="submit" className="btn">
										Upload
									</button>
								</div>
							</form>
							: <label htmlFor="fileID" className="btn">
								Choose File
							</label>}
						</>
					}
					{loader == false && <div class="loader"></div>}
					<span style={{color:'red'}}>{message.error}</span>
					<span style={{color:'green'}}>{message.success}</span>
				</div>

			</div>
		</div>	</>);
}


export default Index;
