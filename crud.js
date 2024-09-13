        let listings = [];
 
        function addListing() {
            const apartmentName = document.getElementById('apartmentName').value;
            const bedCount = document.getElementById('bedCount').value;
            const bathCount = document.getElementById('bathCount').value;
            const bullRunnerAvailability = document.getElementById('bullRunnerAvailability').checked;
            const image = document.getElementById('preview').src;
            const id = Date.now(); // Generate unique ID
 
            const newListing = { id, apartmentName, bedCount, bathCount, bullRunnerAvailability, image };
 
            listings.push(newListing);
            localStorage.setItem('listings', JSON.stringify(listings));
            displayListings();
        }
 
        function displayListings() {
            const listingsElement = document.getElementById('listingDisplay');
            listingsElement.innerHTML = '';
            listings.forEach((listing) => {
                listingsElement.innerHTML += `
                    <div class="card" id="card_${listing.id}">
                        <img src="${listing.image}" alt="Listing Image" style="width:100%">
                        <div class="container">
                            <h4><b>${listing.apartmentName}</b></h4>
                            <p>Bed: ${listing.bedCount}, Bath: ${listing.bathCount}</p>
                            <p>Bull Runner Availability: ${listing.bullRunnerAvailability ? 'Yes' : 'No'}</p>
                            <button onclick="editListing(${listing.id})">Edit</button>
                            <button onclick="removeListing(${listing.id})">Remove</button>
                        </div>
                    </div>`;
            });
        }
 
        function removeListing(id) {
            const index = listings.findIndex(listing => listing.id === id);
            if (index !== -1) {
                listings.splice(index, 1);
                localStorage.setItem('listings', JSON.stringify(listings));
                displayListings();
            }
        }
 
        function editListing(id) {
            const listing = listings.find(listing => listing.id === id);
            const newApartmentName = prompt('Enter new apartment name:', listing.apartmentName);
            const newBedCount = prompt('Enter new bed count:', listing.bedCount);
            const newBathCount = prompt('Enter new bath count:', listing.bathCount);
            const newBullRunnerAvailability = confirm('Is bull runner available for this apartment?');
 
            if (newApartmentName !== null && newBedCount !== null && newBathCount !== null) {
                listing.apartmentName = newApartmentName;
                listing.bedCount = newBedCount;
                listing.bathCount = newBathCount;
                listing.bullRunnerAvailability = newBullRunnerAvailability;
                localStorage.setItem('listings', JSON.stringify(listings));
                displayListings();
            }
        }
 
        window.onload = function () {
            const storedListings = localStorage.getItem('listings');
            if (storedListings) {
                listings = JSON.parse(storedListings);
                displayListings();
            }
        };
 
        function previewImage(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
 
            reader.onload = function () {
                const preview = document.getElementById('preview');
                preview.src = reader.result;
                preview.style.display = 'block';
            }
 
            reader.readAsDataURL(file);
        }
const listings_new = [
 {
     title: "Oak Ramble",
     description: "Quiet community with lush landscaping.",
     price: "$800",
     image: "images/",
     location: "100 Oak Ramble Drive, City",
     bedrooms: 2,
     bathrooms: 2,
     amenities: ["Pool", "24hr Gym", "Dog Park"],
     utilitiesIncluded: ["Water", "Trash Removal"],
     transport: "3 min drive to nearest metro station",
     leaseTerms: "12 months",
     securityDeposit: "$500",
     floorArea: "950 sqft",
     availableDate: "2023-07-01",
     contact: "555-0100"
 },
 {
     title: "Ascott Place",
     description: "Modern apartments near downtown with skyline views.",
     price: "$1200",
     image: "images/ascott-place.jpg",
     location: "450 Ascott Place Lane, Metropolitan Area",
     bedrooms: 3,
     bathrooms: 2,
     amenities: ["Rooftop Terrace", "Underground Parking", "Security System"],
     utilitiesIncluded: ["Gas", "Internet"],
     transport: "Walking distance to public transit",
     leaseTerms: "18 months",
     securityDeposit: "$800",
     floorArea: "1100 sqft",
     availableDate: "Available Now",
     contact: "555-0200"
 },
 {
     title: "Bavarian Village",
     description: "Charming apartments with a community feel.",
     price: "$700",
     image: "images/bavarian-village.jpg",
     location: "2300 Village Drive, Suburb",
     bedrooms: 1,
     bathrooms: 1,
     amenities: ["Community Garden", "Pool"],
     utilitiesIncluded: ["Water"],
     transport: "Shuttle service to city center",
     leaseTerms: "12 months",
     securityDeposit: "$300",
     floorArea: "700 sqft",
     availableDate: "2023-08-15",
     contact: "555-0300"
 },
 {
     title: "Bay Club at Rocky Point",
     description: "Waterfront living with exceptional amenities.",
     price: "$1500",
     image: "images/bay-club-rocky-point.jpg",
     location: "670 Rocky Point Ave, Waterfront",
     bedrooms: 2,
     bathrooms: 2,
     amenities: ["Marina Access", "Fitness Center", "Spa"],
     utilitiesIncluded: ["Electricity", "Water", "Internet"],
     transport: "10 min to downtown by water taxi",
     leaseTerms: "24 months",
     securityDeposit: "$1000",
     floorArea: "1200 sqft",
     availableDate: "2023-10-01",
     contact: "555-0400"
 },
 {
     title: "Bay Oaks Apartments",
     description: "Affordable luxury with spacious floor plans.",
     price: "$900",
     image: "images/bay-oaks.jpg",
     location: "3200 Oak Blvd, Near Park",
     bedrooms: 2,
     bathrooms: 1,
     amenities: ["24hr Security", "Fitness Room", "Community Events"],
     utilitiesIncluded: ["Water", "Trash"],
     transport: "Bus stop right outside",
     leaseTerms: "12 months",
     securityDeposit: "$450",
     floorArea: "850 sqft",
     availableDate: "2023-09-01",
     contact: "555-0500"
 },
 {
     title: "Bristol Place",
     description: "Stylish apartments in a vibrant neighborhood.",
     price: "$1100",
     image: "images/bristol-place.jpg",
     location: "2580 Bristol Circle, Downtown",
     bedrooms: 2,
     bathrooms: 2,
     amenities: ["Pet-Friendly", "Yoga Studio", "Concierge"],
     utilitiesIncluded: ["Gas", "Water"],
     transport: "5 min walk to subway station",
     leaseTerms: "12 months",
     securityDeposit: "$700",
     floorArea: "1000 sqft",
     availableDate: "Available Now",
     contact: "555-0600"
 },
 {
     title: "Brittany Oaks",
     description: "Peaceful living with easy access to shopping and parks.",
     price: "$750",
     image: "images/brittany-oaks.jpg",
     location: "400 Brittany Oaks Blvd, Quiet Suburb",
     bedrooms: 1,
     bathrooms: 1,
     amenities: ["Park Access", "Community BBQ"],
     utilitiesIncluded: ["Water"],
     transport: "Public bus route nearby",
     leaseTerms: "12 months",
     securityDeposit: "$400",
     floorArea: "650 sqft",
     availableDate: "2023-11-01",
     contact: "555-0700"
 },
 {
     title: "Cambridge Woods",
     description: "Tharuvtha pedadhham",
     price: "$50",
     image: "images/lakeview.jpg",
     location: "1234 Campus Drive, College Town",
     bedrooms: 2,
     bathrooms: 1,
     amenities: ["Wi-Fi", "Pool Access"],
     utilitiesIncluded: ["Water", "Internet"],
     transport: "5 min walk to bus station",
     leaseTerms: "12 months",
     securityDeposit: "$200",
     floorArea: "800 sqft",
     availableDate: "2023-09-01",
     contact: "555-0800"
 },
 {
     title: "Camden Live Oak",
     description: "Urban living with state-of-the-art facilities.",
     price: "$1300",
     image: "images/camden-live-oak.jpg",
     location: "800 Live Oak St, Metropolitan Area",
     bedrooms: 3,
     bathrooms: 2,
     amenities: ["Smart Home Technology", "Pool", "Gym"],
     utilitiesIncluded: ["Internet"],
     transport: "Metro station within walking distance",
     leaseTerms: "12 months",
     securityDeposit: "$1000",
     floorArea: "1050 sqft",
     availableDate: "2023-12-01",
     contact: "555-0900"
 },
 {
     title: "LakeView Oaks",
     description: "Exclusive lakeside apartments with breathtaking views.",
     price: "$1400",
     image: "images/lakeview-oaks.jpg",
     location: "500 Lakeview Oaks Circle, Lakeside",
     bedrooms: 2,
     bathrooms: 2,
     amenities: ["Private Dock", "Lake Access", "Luxury Spa"],
     utilitiesIncluded: ["All Utilities"],
     transport: "Private shuttle to city center",
     leaseTerms: "24 months",
     securityDeposit: "$1500",
     floorArea: "1150 sqft",
     availableDate: "2024-01-01",
     contact: "555-1000"
 },{
     title: "Village Oaks",
     description: "Family-friendly apartments i      n a bustling community.",
     price: "$850",
     image: "images/village-oaks.jpg",
     location: "2500 Village Oaks Lane, Suburban Area",
     bedrooms: 2,
     bathrooms: 1,
     amenities: ["Playground", "Community Center"],
     utilitiesIncluded: ["Water", "Trash Removal"],
     transport: "School bus stops within the complex",
     leaseTerms: "12 months",
     securityDeposit: "$500",
     floorArea: "900 sqft",
     availableDate: "2023-08-01",
     contact: "555-1100"
 }
];


     window.onload = function() {
         const tableBody = document.getElementById('listingsTable');
         listings_new.forEach(listing => {
             const row = document.createElement('tr');
             row.innerHTML = `
                 <td>${listing.title}</td>
                 <td>${listing.description}</td>
                 <td>${listing.price}</td>
                 <td>${listing.location}</td>
                 <td>${listing.bedrooms}</td>
                 <td>${listing.bathrooms}</td>
                 <td>${listing.amenities.join(', ')}</td>
                 <td>${listing.utilitiesIncluded.join(', ')}</td>
                 <td>${listing.transport}</td>
                 <td>${listing.leaseTerms}</td>
                 <td>${listing.securityDeposit}</td>
                 <td>${listing.floorArea}</td>
                 <td>${listing.availableDate}</td>
                 <td>${listing.contact}</td>
             `;
             tableBody.appendChild(row);
         });
     }
