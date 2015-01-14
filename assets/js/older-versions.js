var data = { "campaigns" : [
        {
            "status": true,
            "title": "Campaign 1",
            "file_name": "campign1.jpg",
            "download_link": "assets/img/campaign1.jpg",
            "version": "1.0", 
          }
          ],
                
             "comments": [
	             {"text": "Sed mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra" , "date": "12/3/2014"},
	             {"text": "Breted mollis luctus libero, eu egestas ligula hendrerit non. Etiam dictum quam in viverra, Sed mollis luctus libero", "date": "9/4/2014"},
	             {"text":"Med mollis luctuseu egestas ligula hendrerit non. Etiam dictum quam in viverra eu egestas ligula hendrerit non. Med mollis luctuseu egestas ligula hendrerit non. Etiam dictum quam in viverra eu egestas ligula hendrerit non", "date": "11/7/2014"}
	               ]               
}   

var container = document.getElementById('content-older-versions-page');

var stat = document.createElement('p');
	if (data.campaigns[0].status === true){
		stat.className = 'status green-background';
	}
	else stat.className = 'status red-background';
	
var title = document.createElement('p');
	title.className = 'title-row';
	title.innerHTML = data.campaigns[0].title;

var file = document.createElement('p');
	file.className = 'file-row';
	file.innerHTML = data.campaigns[0].file_name;

var download = document.createElement('p');
	download.className = 'download-row';
	download.innerHTML = data.campaigns[0].download_link;
	
var version = document.createElement('p');
	version.className = 'version';
	version.innerHTML = data.campaigns[0].version;
	
var campaign = document.createElement('div');
	campaign.className = 'rows';
	campaign.appendChild(stat);
	campaign.appendChild(title);
	campaign.appendChild(file);
	campaign.appendChild(download);
	campaign.appendChild(version);

	container.appendChild(campaign);
	
var comments = document.createElement('div');
	comments.id = 'comment-wrapper';
	
for (var i = 0; i < data.comments.length; i++){
	var comment = document.createElement('p')
	comment.className = 'comments';
	comment.innerHTML = data.comments[i].date + '<br>' + data.comments[i].text;
	comments.appendChild(comment);
}
	container.appendChild(comments);

    


































