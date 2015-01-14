var data = { "campaigns" : [
        {
            "status": false,
            "title": "Campaign 1",
            "file_name": "campign1.jpg",
            "download_link": "assets/img/campaign1.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "           

        },
        {
            "status": false,
            "title": "Campaign 2",
            "file_name": "campign2.jpg",
            "download_link": "assets/img/campaign2.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": false,
            "title": "Campaign 3",
            "file_name": "campign3.jpg",
            "download_link": "assets/img/campaign3.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": true,
            "title": "Campaign 4",
            "file_name": "campign4.jpg",
            "download_link": "assets/img/campaign4.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": true,
            "title": "Campaign 5",
            "file_name": "campign5.jpg",
            "download_link": "assets/img/campaign5.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },
        {
            "status": true,
            "title": "Campaign 6",
            "file_name": "campign6.jpg",
            "download_link": "assets/img/campaign6.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },
        {
            "status": true,
            "title": "Campaign 7",
            "file_name": "campign7.jpg",
            "download_link": "assets/img/campaign7.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },
        {
            "status": false,
            "title": "Campaign 8",
            "file_name": "campign8.jpg",
            "download_link": "assets/img/campaign8.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },
        {
            "status": true,
            "title": "Campaign 8",
            "file_name": "campign8.jpg",
            "download_link": "assets/img/campaign8.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },
        {
            "status": true,
            "title": "Campaign 8",
            "file_name": "campign8.jpg",
            "download_link": "assets/img/campaign8.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": true,
            "title": "Campaign 9",
            "file_name": "campign9.jpg",
            "download_link": "assets/img/campaign9.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": false,
            "title": "Campaign 10",
            "file_name": "campign10.jpg",
            "download_link": "assets/img/campaign10.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": true,
            "title": "Campaign 11",
            "file_name": "campign11.jpg",
            "download_link": "assets/img/campaign11.jpg",
            "version": "1.0", 
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },
        {
            "status": false,
            "title": "Campaign 12",
            "file_name": "campign12.jpg",
            "download_link": "assets/img/campaign12.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },  
        {
            "status": true,
            "title": "Campaign 13",
            "file_name": "campign13.jpg",
            "download_link": "assets/img/campaign13.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "             

        },  
        {
            "status": true,
            "title": "Campaign 14",
            "file_name": "campign14.jpg",
            "download_link": "assets/img/campaign14.jpg",
            "version": "1.0",
            "coments": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra "            

        },                                                                                                                        
    ]
}

	
	var row, status, title, file, download, version,
	
		container = document.getElementById("main-content-wrapper-page10");
			
				
	for (i = 0; i < data.campaigns.length; i++) {
		
		 currentContents = container.innerHTML;

		row = "<div class='rows'>"
		
		if (data.campaigns[i].status === true) {
			
			status = "<p class='status green-background'></p>"
			
		} else {
			
			status = "<p class='status red-background'></p>";
		}
		
		title = "<p class='title-row'>"+"<a href='page7.html'>"
		+data.campaigns[i].title+"</a>"+"<p>";
		
		file = "<p class='file-row'>"+data.campaigns[i].file_name+"</p>";
		
		download = "<p class='download-row'>"+data.campaigns[i].download_link+"</p>";
		
		version = "<p class='version'>"+data.campaigns[i].version+"</p>";					

		row += status + title + file + download + version + "</div>";
		
		container.innerHTML = currentContents + row;
		
};













