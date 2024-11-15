import { json } from 'stream/consumers';

const jsonText = { 
    'facilities': {
        'informationSystems': {
            'customerHelpPoints': {
                'generalInfo': '<p>Customer help points are available at the platforms and at the taxi rank as well as using the rail information point at the centre of the main concourse.</p>',
            },
            'informationAvailableFromStaff': {
                'locationInfo': 'From information point<br>From help point<br>From ticket office',
            },
            'departureScreens': {},
            'arrivalScreens': {},
            'announcements': {},
        },
        'fares': {
            'ticketOffice': {
                'openingTimes': 'Monday to Friday: 06:00-22:00<br>Saturday: 06:00-22:00<br>Sunday: 07:45-22:00',
                'locationInfo': '<p>In the Main Concourse opposite the shops</p>',
                'generalInfo': '<p>The station will remain open until the last train departs.</p>',
            },
            'ticketMachine': {},
        },
        'passengerServices': {
            'customerService': {
                'generalInfo': '<p>Help is available at the Rail Information Point in the centre of the Main Concourse.</p>',
            },
            'leftLuggage': {
                'generalInfo': 'Operator: Excess Baggage Company<br>Phone: <a href=>020 3468 4690</a><br>Website: <a href=>Visit</a>',
            },
            'lostProperty': {
                'openingTimes': 'Monday to Friday: 09:00-17:30',
                'generalInfo': 'Operator: Excess Baggage Company<br>Phone: <a href=>0330 024 0215</a><br>Website: <a href=>Visit</a>',
            },
        },
        'stationFacilities': {
            'telephones': {},
            'atmMachine': {},
            'babyChange': {},
            'bureauDeChange': {},
            'firstClassLounge': {
                'openingTimes': 'Monday to Friday: 07:00-21:25<br>Saturday: 08:00-20:15<br>Sunday: 09:00-20:15',
                'generalInfo': '<p><strong>Location:</strong> Next to Waitrose</p><p><strong>Tickets Accepted in LNER First Class Lounge:</strong></p><ul><li>Fully inter-available First Class Season Ticket (i.e. tickets not specific to one train company)</li><li>Any First Class Anytime ticket valid for travel on the LNER route</li><li>Any LNER First Class packages</li><li>First Advance (routed LNER & connections)</li><li>LNER First Class Reader Offer (routed LNER & connections)</li><li>LNER First Class Flat Fare (routed LNER & connections)</li><li>LNER Rewards First Class Leisure Single (routed LNER & connections)</li><li>LNER Self-Print First Class Upgrade voucher (routed LNER & connections)</li><li>Inclusive Tour Tickets (eg. Superbreak)</li><li>Weekend First</li></ul><p>Assistance dogs and other well behaved dogs on leads will be permitted in all LNER First Class Lounges</p><p><strong>Facilities:</strong> Toilets. TV. Air charge for mobile phones.</p><p><strong>Refreshments:</strong> Our first class lounges offer a selection of complimentary refreshments nsuch as tea, coffee, water and various crisps and biscuits. Other items are also available to purchase through Lets Eat at Your Seat by scanning the QR code at your table taking you to the LEAYS portal where you will be able to purchase additional items.</p><p><strong>Wi-Fi:</strong> Yes</p><p><strong>Showers:</strong> No</p>',
            },
            'shops': {
                'generalInfo': '<p>Cafes, bars, kiosks, restaurants, delicatessens, confectioners, groceries, food and drink to eat in or take away. clothes, stationery, flowers, photo processing, mobile phones, bureau de change, shoe repairs, key cutting, Pharmacy and prescriptions, optician, fitness, health and beauty services.</p>',
            },
            'showers': {},
            'stationBuffet': {
                'locationInfo': '<p>Station concourse</p>',
            },
            'toilets': {
                'locationInfo': '<p>The toilets including accessible toilets are located next to platform 9. There also toilets on the Mezzanine Level.</p>',
            },
            'trolleys': {},
            'waitingRoom': {
                'openingTimes': 'Monday to Friday: 06:00-23:30<br>Saturday: 06:00-22:30<br>Sunday: 07:45-23:30',
                'locationInfo': '<p>All platforms are partially or fully covered with a canopy.</p>',
            },
            'wifi': {
                'generalInfo': '<p><a href= title=>Find WiFi Hotspots around London Kings Cross station</a></p>',
            },
        },
        'accessibility': {
            'staffHelpAvailable': {
                'openingTimes': 'Monday to Friday: 05:00-01:36<br>Saturday: 05:00-00:36<br>Sunday: 05:30-01:36',
                'generalInfo': '<p>Help is available at the Rail Information Point in the centre of the concourse, station help points or from any member of staff.</p><p>Disability assistance is available to and from platforms, the car park and the taxi rank. You can request this from the Kings Cross Information Point in the centre of the Main Concourse, station help points or from any member of staff.</p><p>It is preferred if disabled assistance is booked 24hours in advance by using the following numbers of your relevant train operator:</p><p>London North Eastern Railway - 03457 225 225 [Option 3 then Option 4] textphone 0800 975 1052 or you can complete the web form at <a href= title=>www.lner.co.uk/customer-service/contact-us/assisted-travel</a><a href= title=>/</a> Open Monday - Saturday 08:00-20:00, Sunday 10:00-20:00 </p><p>Hull Trains - FREEPHONE 0800 316 1323</p><p>Grand Central - 08440 8110 072</p><p>Great Northern - 0800 0582 844</p>',
            },
            'inductionLoop': {},
            'accessibleTicketMachines': {
                'generalInfo': '<p>One London North Eastern Railway machine inside the travel centre and one London North Eastern Railway machine outside the travel centre and are DDA compliant. There is a lowered ticket machine at this station.</p>',
            },
            'rampForTrainAccess': {},
            'accessibleTaxis': {
                'generalInfo': '<p>Accessible taxis are located at the taxi rank situated on Pancras Road just outside of the station. The taxi rank is located outside the station on Pancras Road. There is a help point at the taxi rank that can be used to request disability assistance. All London Black Cabs can accommodate wheelchair passengers without wheelchair users having to leave their wheelchair.</p>',
            },
            'accessiblePublicTelephones': {
                'generalInfo': '<p>Public telephones are available near the Euston Road entrance of the station.</p>',
            },
            'nationalKeyToilets': {
                'locationInfo': '<p>Accessible toilets are located next to platform 9 and can be operated by a radar key.</p>',
            },
            'stepFreeAccess': {
                'generalInfo': '<p>This is a Category A station. This station has step-free level access to all platforms.</p><p>Lifts also provided between concourse up to the Mezzanine and down to the London Underground ticket hall.</p><p>The Assistance Meeting Point varies - please check with your operator.</p>',
            },
            'ticketGates': {
                'generalInfo': '<p>Yes there are ticket gates to all platforms. All platforms can be accessed by wide ticket gates.</p>',
            },
            'impairedMobilitySetDown': {
                'generalInfo': '<p>There are 3 disabled spaces with 1 hour parking outside Kings Cross station on Pancras road. There is a help point here that can be used to request disability assistance from these spaces.</p><p>There is a Disabled Meeting Point on the station concourse (near the Customer Information desk) where disabled passengers coming into the station can be picked up.</p>',
            },
            'wheelchairsAvailable': {},
        },
        'interchange': {
            'airport': {
                'generalInfo': '<p>Connections from LUL available</p>',
            },
            'carPark': {
                'generalInfo': 'Car parks available: 1',
            },
            'cycleStorage': {
                'generalInfo': 'Spaces: 204<br>CCTV: Yes<br>Shelter: Yes<br>Types available: Stands<br>',
                'locationInfo': '<p>Platforms 1, 8 & 9</p>',
            },
            'metroServices': {
                'generalInfo': '<p>N/A</p>',
            },
            'onwardTravel': {
                'generalInfo': '<p>There are bus stops in streets surrounding the station on Euston Road, Goods Way and York Way. More details at<a href= title=>https://www.nationalrail.co.uk/posters/KGX.pdf</a></p><p><strong>Accessibility on London Buses</strong></p><p>All Transport for London buses are accessible by step free accesson Transport for London\'s website <a href= title=>https://tfl.gov.uk/transport-accessibility/wheelchair-access-and-avoiding-stairs</a></p><p>More information about Transport for London buses can be found at<a href= title=>https://tfl.gov.uk/modes/buses/</a></p>',
            },
            'taxiRank': {
                'generalInfo': '<p>The taxi rank is situated on Pancras Road just outside of the station.</p>',
            },
        },
    },
    'location': {
        'addressLines': 'London Kings Cross station<br>Euston Road<br>London<br>Greater London',
        'postCode': 'N1 9AL',
        'latitude': 51.53088842,
        'longitude': -0.122921342,
    },
};

const example = JSON.stringify(jsonText);

export default example;