const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
let newsBlockEl = document.querySelector(".news--blocks--div");

console.log(newsBlockEl);

// Urls

const NEWS_API =
	"https://newsapi.org/v2/everything?q=agriculture&from=2023-03-24&sources=the-times-of-india&sortBy=publishedAt&apiKey=1713d3c967ed4defab26f9996b21716a";

//show sidebar
menuBtn.addEventListener("click", () => {
	sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
	sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme-variables");

	themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
	themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

const displayNews = async () => {
	let results;
	try {
		const response = await fetch(NEWS_API);
		// console.log(response);
		results = await response.json();
	} catch (error) {
		console.error(error);
	}

	console.log(results.articles);

	insertNewsArticles(results.articles);
};

const insertNewsArticles = (articles) => {
	for (let i = 6; i <= 14; i++) {
		const { title, description, url, urlToImage, publishedAt } =
			articles[i];

		const html = `
        						<div class="news-block">
							<img
								class="news--img"
								src=${urlToImage}
								alt="image--source image"
							/>
							<div class="news--details">
								<a href=${url}
									><h3 class="news--heading">${title}
									</h3></a
								>
								<p class="news-description">${description}
								</p>
								<h6 class="news--date">${publishedAt}</h6>
							</div>
						</div>
    `;
		newsBlockEl.innerHTML += html;
	}
};

displayNews();

const agriNews = [
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "PTI",
		title: "IoTechWorld Avigation aims to sell 3,000 agri drones this fiscal, explore export market",
		description:
			"Startup IoTechWorld, which was founded in 2017 by Deepak Bhardwaj and Anoop Upadhyay, has a manufacturing facility in Gurugram. It sells agri drones at about Rs 7.5 lakh plus GST.",
		url: "https://economictimes.indiatimes.com/tech/startups/iotechworld-avigation-aims-to-sell-3000-agri-drones-this-fiscal-explore-export-market/articleshow/99706137.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99706206,width-1070,height-580,imgsize-609036,overlay-ettech/photo.jpg",
		publishedAt: "2023-04-23T08:05:56Z",
		content:
			"Agri drone manufacturer IoTechWorld Avigation is targeting to sell 3,000 drones this fiscal, a six-fold jump from the previous year, on rising demand mainly from agrochemical firms and agriculture un… [+2733 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "ANI",
		title: "Jaishankar calls on Guyana PM, discusses energy, defence cooperation",
		description:
			"India's External Affairs Minister, S Jaishankar, discussed energy, disaster resilience, and defence cooperation during his visit to Guyana, tweeting his satisfaction at India's partnership with the South American country in \"its developmental journey.\" During…",
		url: "https://economictimes.indiatimes.com/news/india/jaishankar-calls-on-guyana-pm-discusses-energy-defence-cooperation/articleshow/99702883.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99702954,width-1070,height-580,imgsize-53586,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-23T04:25:40Z",
		content:
			"External Affairs Minister S Jaishankar called on Guyana's Prime Minister Mark Phillips and discussed energy, disaster resilience, and defence cooperation.Taking to Twitter on Sunday, Jaishankar said,… [+2631 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "ANI",
		title: "EAM Jaishankar co-chairs fifth India-Guyana Joint Commission Meeting",
		description:
			"India's External Affairs Minister, S Jaishankar, held comprehensive discussions with his Guyana counterpart during the 5th India-Guyana Joint Commission Meeting. Topics covered included agriculture, energy, health, pharmaceuticals, defence cooperation, human …",
		url: "https://economictimes.indiatimes.com/news/india/eam-jaishankar-co-chairs-fifth-india-guyana-joint-commission-meeting/articleshow/99700380.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99700447,width-1070,height-580,imgsize-22382,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-23T01:24:20Z",
		content:
			'External Affairs Minister S Jaishankar on Saturday co-chaired the 5th India-Guyana Joint Commission Meeting with his Guyana counterpart Hugh Todd and held "comprehensive discussions" related to agric… [+2758 chars]',
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "Kiran Kabtta Somvanshi",
		title: "All that glitters is not good gold: Inside India's yellow metal smuggling scene",
		description:
			"Gold gets smuggled into the country in a hundred ways. A carrier can hide it in their body, stitch it inside their clothing, conceal it in their shoes, jackets or special belts, or simply carry it in their pockets.",
		url: "https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/all-that-glitters-is-not-good-gold-inside-indias-yellow-metal-smuggling-scene/articleshow/99701733.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99695821,width-1070,height-580,imgsize-62324,overlay-etmarkets/photo.jpg",
		publishedAt: "2023-04-22T17:30:00Z",
		content:
			"On April 13, days ahead of Akshaya Tritiya, gold prices hit a record high of Rs 60,800 for 10 grams in Mumbai. The soaring prices have ensured that consumer demand remains muted. Even the Akshaya Tri… [+6531 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "Kiran Kabtta Somvanshi",
		title: "All that glitters is not good gold: Inside India's yellow metal smuggling scene",
		description:
			"Gold gets smuggled into the country in a hundred ways. A carrier can hide it in their body, stitch it inside their clothing, conceal it in their shoes, jackets or special belts, or simply carry it in their pockets.",
		url: "https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/all-that-glitters-is-not-good-gold-inside-indias-yellow-metal-smuggling-scene/articleshow/99695825.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99695821,width-1070,height-580,imgsize-62324,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-22T17:30:00Z",
		content:
			"On April 13, days ahead of Akshaya Tritiya, gold prices hit a record high of Rs 60,800 for 10 grams in Mumbai. The soaring prices have ensured that consumer demand remains muted. Even the Akshaya Tri… [+6531 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "PTI",
		title: "Bihar's 'khurma', 'tilkut','balu shahi' likely to get GI tags, applications accepted: Official",
		description:
			"National Bank for Agriculture and Rural Development assisted producers' associations in filing applications for GI tags for these famous delicacies and products of Bihar, he said. \"We also engaged experts for the purpose. The bank is playing an important role…",
		url: "https://economictimes.indiatimes.com/news/india/bihars-khurma-tilkutbalu-shahi-likely-to-get-gi-tags-applications-accepted-official/articleshow/99694594.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99694709,width-1070,height-580,imgsize-56406,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-22T14:13:10Z",
		content:
			"Applications seeking geographical indication tag for 'khurma', 'tilkut' and 'balu shahi' - the famous delicacies of Bihar- have been accepted by competent authority after preliminary examinations, an… [+1960 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "ET Online",
		title: "IMF's growth forecast for India may have errors, real numbers to come as a surprise: RBI",
		description:
			"The IMF recently lowered its 2023 growth forecast for India to 5.9 per cent from 6.1 per cent citing slowness of domestic consumption and challenging external condition. In its annual World Economic Outlook, IMF also lowered the forecast for 2024-25 fiscal (A…",
		url: "https://economictimes.indiatimes.com/news/economy/indicators/imf-growth-forecast-for-india-may-have-errors-rbi/articleshow/99683158.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99683144,width-1070,height-580,imgsize-40796,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-22T04:34:40Z",
		content:
			"The Reserve Bank of India (RBI) has said that the International Monetary Fund's growth forecast for India might be off the mark.\"Although too early to tell, most recent data arrivals suggest that the… [+3626 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "PTI",
		title: "EAM Jaishankar meets counterparts from Trinidad and Tobago, Jamaica on sidelines of India-CARICOM meeting",
		description:
			"India's External Affairs Minister, S Jaishankar, has held bilateral meetings with counterparts from Trinidad and Tobago, St. Kitts and Nevis, St. Vincent and Grenadines, Grenada, Barbados, and Jamaica during the 4th India-CARICOM ministerial meeting held in G…",
		url: "https://economictimes.indiatimes.com/news/india/eam-jaishankar-meets-counterparts-from-trinidad-and-tobago-jamaica-on-sidelines-of-india-caricom-meeting/articleshow/99680025.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99680047,width-1070,height-580,imgsize-19690,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-22T01:10:03Z",
		content:
			"External Affairs Minister S Jaishankar on Friday, after co-chairing the 4th India-CARICOM ministerial meeting with his Jamaican counterpart Kaminaj Smith here in Guyana's capital, had bilateral meeti… [+3690 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "AFP",
		title: "UN reports 'off the charts' melting of glaciers",
		description:
			"The world's glaciers melted at dramatic speed last year and saving them is effectively a lost cause, the United Nations reported Friday, as climate change indicators once again hit record highs.",
		url: "https://economictimes.indiatimes.com/news/environment/global-warming/un-reports-off-the-charts-melting-of-glaciers/articleshow/99668916.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99669121,width-1070,height-580,imgsize-763143,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-21T11:28:37Z",
		content:
			"GENEVA: The world's glaciers melted at dramatic speed last year and saving them is effectively a lost cause, the United Nations reported Friday, as climate change indicators once again hit record hig… [+3849 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "Shambhavi Anand",
		title: "Akshay Kumar, Virendra Sehwag invest in Two Brothers Organic Farms",
		description:
			"Akshay Kumar, Virendra Sehwag and some other high net worth individuals have invested a total of Rs 14.5 crore as part of a pre-Series A funding round, according to Satyajit Hange, one of TBOF’s founders.",
		url: "https://economictimes.indiatimes.com/tech/funding/akshay-kumar-virendra-sehwag-invest-in-two-brothers-organic-farms/articleshow/99665373.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99665373,width-1070,height-580,imgsize-2565335,overlay-ettech/photo.jpg",
		publishedAt: "2023-04-21T09:46:49Z",
		content:
			"Actor Akshay Kumar and former cricketer Virendra Sehwag have invested an undisclosed amount in Pune-based farming startup Two Brothers Organic Farms (TBOF).Kumar, Sehwag and some other high net worth… [+1778 chars]",
	},
	{
		source: {
			id: "the-times-of-india",
			name: "The Times of India",
		},
		author: "Reuters",
		title: "Activists mark Earth Day as scientists warn of more extreme weather",
		description:
			'Volunteers worldwide celebrate Earth Day by conducting conservation and clean-up activities to encourage governments to take action against climate change. London, Rome and Boston host environmentally highlighted events including the "Big One" four-day event …',
		url: "https://economictimes.indiatimes.com/news/science/activists-mark-earth-day-as-scientists-warn-of-more-extreme-weather/articleshow/99659120.cms",
		urlToImage:
			"https://img.etimg.com/thumb/msid-99659180,width-1070,height-580,imgsize-344518,overlay-economictimes/photo.jpg",
		publishedAt: "2023-04-21T05:53:29Z",
		content:
			"Volunteers in dozens of countries were set to plant trees, clean up trash and urge governments to do more to combat climate change to mark Earth Day, as scientists warn of more extreme weather and re… [+1951 chars]",
	},
];
