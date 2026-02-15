jQuery(document).ready(function ($) {
    // State to store matched services
    // Embedded directly to avoid local file CORS issues
    const servicesData = [
        {
            "county": "Box Elder County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Cache Valley Youth Center",
            "phone": "435-713-6260",
            "contact": "Danielle Leuk",
            "address": "2051 North 600 West, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington , Utah 84025",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Home Detention",
            "phone": "435-787-3500",
            "contact": "Danielle Leuk",
            "address": "115 West Golf Course Rd, Ste E, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden , Utah 84043",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden , Utah 84404",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "School Reintegration Plan",
            "phone": "435-994-1358",
            "contact": "",
            "address": "",
            "email": "dleuk@utah.gov"
        },
        {
            "county": "Box Elder County",
            "service_name": "School-Based Outreach",
            "phone": "435-713-6260",
            "contact": "Danielle Leuk",
            "address": "2051 North 600 West, Logan , Utah 84321",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City , Utah 84720",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Box Elder County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "2051 S 600 W, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Cache Valley Youth Center",
            "phone": "435-713-6260",
            "contact": "Danielle Leuk",
            "address": "2051 North 600 West, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South , West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Home Detention",
            "phone": "435-787-3500",
            "contact": "Danielle Leuk",
            "address": "115 West Golf Course Rd, Ste E, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "School Reintegration Plan",
            "phone": "435-994-1358",
            "contact": "",
            "address": "",
            "email": "dleuk@utah.gov"
        },
        {
            "county": "Cache County",
            "service_name": "School-Based Outreach",
            "phone": "435-713-6260",
            "contact": "Danielle Leuk",
            "address": "2051 North 600 West, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Cache County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "2051 S 600 W, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Cache Valley Youth Center",
            "phone": "435-713-6260",
            "contact": "Danielle Leuk",
            "address": "2051 North 600 West, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South , West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Home Detention",
            "phone": "435-787-3500",
            "contact": "Danielle Leuk",
            "address": "115 West Golf Course Rd, Ste E, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "School Reintegration Plan",
            "phone": "435-994-1358",
            "contact": "",
            "address": "",
            "email": "dleuk@utah.gov"
        },
        {
            "county": "Rich County",
            "service_name": "School-Based Outreach",
            "phone": "435-713-6260",
            "contact": "Danielle Leuk",
            "address": "2051 North 600 West, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Rich County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "2051 S 600 W, Logan, Utah 84321",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Archway Youth Services",
            "phone": "801-612-4901",
            "contact": "Tara Jorgensen",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Day Skills Intervention",
            "phone": "801-612-4901",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Home Detention",
            "phone": "801-774-8767",
            "contact": "Jason Joe",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "School Reintegration Plan",
            "phone": "801-612-4940",
            "contact": "",
            "address": "",
            "email": "jbuttars@utah.gov"
        },
        {
            "county": "Davis County",
            "service_name": "School-Based Outreach",
            "phone": "801-774-8767",
            "contact": "Darce Afuvai",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Weber Valley Youth Center",
            "phone": "801-612-4901",
            "contact": "Jason Joe",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Davis County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "1305 S 700 W, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Archway Youth Services",
            "phone": "801-612-4901",
            "contact": "Tara Jorgensen",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Day Skills Intervention",
            "phone": "801-612-4901",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Home Detention",
            "phone": "801-774-8767",
            "contact": "Jason Joe",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "School Reintegration Plan",
            "phone": "801-612-4940",
            "contact": "",
            "address": "",
            "email": "jbuttars@utah.gov"
        },
        {
            "county": "Morgan County",
            "service_name": "School-Based Outreach",
            "phone": "801-774-8767",
            "contact": "Darce Afuvai",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Weber Valley Youth Center",
            "phone": "801-612-4901",
            "contact": "Jason Joe",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Morgan County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "1305 S 700 W, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Archway Youth Services",
            "phone": "801-612-4901",
            "contact": "Tara Jorgensen",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Day Skills Intervention",
            "phone": "801-612-4901",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Home Detention",
            "phone": "801-774-8767",
            "contact": "Jason Joe",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "School Reintegration Plan",
            "phone": "801-612-4940",
            "contact": "",
            "address": "",
            "email": "jbuttars@utah.gov"
        },
        {
            "county": "Weber County",
            "service_name": "School-Based Outreach",
            "phone": "801-774-8767",
            "contact": "Darce Afuvai",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Weber Valley Youth Center",
            "phone": "801-612-4901",
            "contact": "Jason Joe",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Weber County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "1305 S 700 W, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Case Management",
            "phone": "801-538-4350",
            "contact": "Sam Sherrow",
            "address": "195 North 1950 West, Salt Lake City , Utah 84116",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Day Skills Intervention",
            "phone": "801-269-5105",
            "contact": "Erica Reeves",
            "address": "3450 South 900 West, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South , West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Gemstone",
            "phone": "801-269-5105",
            "contact": "Erica Reeves",
            "address": "3450 South 900 West, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-538-4350",
            "contact": "Sam Sherrow",
            "address": "195 N 1950 West, Salt Lake City, UT 84116",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Salt Lake County Youth Services",
            "phone": "385-468-4500",
            "contact": "Carolyn Hansen",
            "address": "177 West Price Avenue , Salt Lake City, Utah",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Salt Lake County Youth Services (South)",
            "phone": "385-468-4610",
            "contact": "Carolyn Hansen",
            "address": "8781 South Redwood Rd., Building #3, West Jordan, UT 84088",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Salt Lake Valley Youth Center",
            "phone": "801-269-5100",
            "contact": "Derek Frye",
            "address": "3450 South 900 West, Salt Lake City , Utah 84119",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Salt Lake Youth Services",
            "phone": "801-269-5105",
            "contact": "Manu Taeoalii",
            "address": "3450 South 900 West, Salt Lake City, UT 84119",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Salt Lake County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Tooele Youth Services Center",
            "phone": "435-843-4700",
            "contact": "Manu Taeoali",
            "address": "31 S Main Street, Tooele, UT 84074",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Salt Lake County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "3450 S 900 W, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Case Management",
            "phone": "801-538-4350",
            "contact": "Sam Sherrow",
            "address": "195 North 1950 West, Salt Lake City , Utah 84116",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Day Skills Intervention",
            "phone": "801-269-5105",
            "contact": "Erica Reeves",
            "address": "3450 South 900 West, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South , West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Gemstone",
            "phone": "801-269-5105",
            "contact": "Erica Reeves",
            "address": "3450 South 900 West, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-538-4350",
            "contact": "Sam Sherrow",
            "address": "195 N 1950 West, Salt Lake City, UT 84116",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Salt Lake County Youth Services",
            "phone": "385-468-4500",
            "contact": "Carolyn Hansen",
            "address": "177 West Price Avenue , Salt Lake City, Utah",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Salt Lake County Youth Services (South)",
            "phone": "385-468-4610",
            "contact": "Carolyn Hansen",
            "address": "8781 South Redwood Rd., Building #3, West Jordan, UT 84088",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Salt Lake Valley Youth Center",
            "phone": "801-269-5100",
            "contact": "Derek Frye",
            "address": "3450 South 900 West, Salt Lake City , Utah 84119",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Salt Lake Youth Services",
            "phone": "801-269-5105",
            "contact": "Manu Taeoali",
            "address": "3450 South 900 West, Salt Lake City, UT 84119",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Summit County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Tooele Youth Services Center",
            "phone": "435-843-4700",
            "contact": "Manu Taeoali",
            "address": "31 S Main Street, Tooele, UT 84074",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Summit County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "3450 S 900 W, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Case Management",
            "phone": "801-538-4350",
            "contact": "Sam Sherrow",
            "address": "195 North 1950 West, Salt Lake City , Utah 84116",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Day Skills Intervention",
            "phone": "801-269-5105",
            "contact": "Erica Reeves",
            "address": "3450 South 900 West, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South , West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Gemstone",
            "phone": "801-269-5105",
            "contact": "Erica Reeves",
            "address": "3450 South 900 West, Salt Lake City, Utah 84119",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-538-4350",
            "contact": "Sam Sherrow",
            "address": "195 N 1950 West, Salt Lake City, UT 84116",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Salt Lake County Youth Services",
            "phone": "385-468-4500",
            "contact": "Carolyn Hansen",
            "address": "177 West Price Avenue , Salt Lake City, Utah",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Salt Lake County Youth Services (South)",
            "phone": "385-468-4610",
            "contact": "Carolyn Hansen",
            "address": "8781 South Redwood Rd., Building #3, West Jordan, UT 84088",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Salt Lake Valley Youth Center",
            "phone": "801-269-5100",
            "contact": "Derek Frye",
            "address": "3450 South 900 West, Salt Lake City , Utah 84119",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Salt Lake Youth Services",
            "phone": "801-269-5105",
            "contact": "Manu Taeoali",
            "address": "3450 South 900 West, Salt Lake City, UT 84119",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Tooele County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Tooele Youth Services Center",
            "phone": "435-843-4700",
            "contact": "Manu Taeoali",
            "address": "31 S Main Street, Tooele, UT 84074",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Tooele County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "31 S Main Street, Tooele, Utah 84074",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Day Skills Intervention",
            "phone": "385-225-5952",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Home Detention",
            "phone": "801-342-7840",
            "contact": "Eli Valenzuela",
            "address": "1991 South State St., Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Darce Afuvai",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Millard County",
            "service_name": "Slate Canyon Youth Center",
            "phone": "801-342-7840",
            "contact": "Eli Valenzuela",
            "address": "1991 South State Street, Provo , Utah 84606",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Slate Canyon Youth Center",
            "phone": "801-342-7840",
            "contact": "Vaosa Roberts",
            "address": "1991 South State Street, Provo , Utah 84606",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Vantage Point Youth Services",
            "phone": "801-373-2215",
            "contact": "",
            "address": "1185 East 300 North, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Millard County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "1991 S State Street, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Day Skills Intervention",
            "phone": "385-225-5952",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Home Detention",
            "phone": "801-342-7840",
            "contact": "Eli Valenzuela",
            "address": "1991 South State St., Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Juab County",
            "service_name": "Slate Canyon Youth Center",
            "phone": "801-342-7840",
            "contact": "Eli Valenzuela",
            "address": "1991 South State Street, Provo , Utah 84606",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Slate Canyon Youth Center",
            "phone": "801-342-7840",
            "contact": "Vaosa Roberts",
            "address": "1991 South State Street, Provo , Utah 84606",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Vantage Point Youth Services",
            "phone": "801-373-2215",
            "contact": "",
            "address": "1185 East 300 North, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Juab County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "1991 S State Street, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Utah County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Day Skills Intervention",
            "phone": "385-225-5952",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Home Detention",
            "phone": "801-342-7840",
            "contact": "Vaosa Roberts",
            "address": "1991 South State St., Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Slate Canyon Youth Center",
            "phone": "801-342-7840",
            "contact": "Vaosa Roberts",
            "address": "1991 South State Street, Provo , Utah 84606",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Vantage Point Youth Services",
            "phone": "801-373-2215",
            "contact": "",
            "address": "1185 East 300 North, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Utah County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "1991 S State Street, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Day Skills Intervention",
            "phone": "385-225-5952",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "801-342-7840",
            "contact": "Vaosa Roberts",
            "address": "1991 South State St., Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "801-828-8657",
            "contact": "",
            "address": "",
            "email": "bukoh-eke@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "Slate Canyon Youth Center",
            "phone": "801-342-7840",
            "contact": "Vaosa Roberts",
            "address": "1991 South State Street, Provo , Utah 84606",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Vantage Point Youth Services",
            "phone": "801-373-2215",
            "contact": "",
            "address": "1185 East 300 North, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "1991 S State Street, Provo, Utah 84606",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela 205 West 900 North Springville, Utah 84663",
            "address": "",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela 2021 S State Street Provo, UT 84606",
            "address": "",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Day Skills Intervention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Iron County Youth Services",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "1692 West Harding Ave, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "",
            "address": "",
            "email": "mamosa@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "",
            "address": "",
            "email": "mamosa@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "School-Based Outreach",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School-Based Outreach",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North , Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Washington County Youth Center",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "270 E 1600 N, Cedar City, Utah 84701",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela 205 West 900 North Springville, Utah 84663",
            "address": "",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela 2021 S State Street Provo, UT 84606",
            "address": "",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Day Skills Intervention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Iron County Youth Services",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "1692 West Harding Ave, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "",
            "address": "",
            "email": "mamosa@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "",
            "address": "",
            "email": "mamosa@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "School-Based Outreach",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School-Based Outreach",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North , Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Washington County Youth Center",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "270 E 1600 N, Cedar City, Utah 84701",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela 205 West 900 North Springville, Utah 84663",
            "address": "",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela 2021 S State Street Provo, UT 84606",
            "address": "",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Day Skills Intervention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Home Detention",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Iron County Youth Services",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "1692 West Harding Ave, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "",
            "address": "",
            "email": "mamosa@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "",
            "address": "",
            "email": "mamosa@utah.gov"
        },
        {
            "county": "Wasatch County",
            "service_name": "School-Based Outreach",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "School-Based Outreach",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North , Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Washington County Youth Center",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Wasatch County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "330 S 5300 W, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Central Utah Youth Center",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Home Detention",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "School Reintegration Plan",
            "phone": "385-424-4184",
            "contact": "",
            "address": "",
            "email": "marymitchell@utah.gov"
        },
        {
            "county": "Garfield County",
            "service_name": "School-Based Outreach",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 North SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Garfield County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Central Utah Youth Center",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Home Detention",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "School Reintegration Plan",
            "phone": "385-424-4184",
            "contact": "",
            "address": "",
            "email": "marymitchell@utah.gov"
        },
        {
            "county": "Kane County",
            "service_name": "School-Based Outreach",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 North SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Kane County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Central Utah Youth Center",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Home Detention",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "School Reintegration Plan",
            "phone": "385-424-4184",
            "contact": "",
            "address": "",
            "email": "marymitchell@utah.gov"
        },
        {
            "county": "Piute County",
            "service_name": "School-Based Outreach",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 North SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Piute County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Central Utah Youth Center",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Home Detention",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "School Reintegration Plan",
            "phone": "385-424-4184",
            "contact": "",
            "address": "",
            "email": "marymitchell@utah.gov"
        },
        {
            "county": "Sanpete County",
            "service_name": "School-Based Outreach",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 North SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Sanpete County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Central Utah Youth Center",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Home Detention",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "School Reintegration Plan",
            "phone": "385-424-4184",
            "contact": "",
            "address": "",
            "email": "marymitchell@utah.gov"
        },
        {
            "county": "Sevier County",
            "service_name": "School-Based Outreach",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 North SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Sevier County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Central Utah Youth Center",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Home Detention",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "School Reintegration Plan",
            "phone": "385-424-4184",
            "contact": "",
            "address": "",
            "email": "marymitchell@utah.gov"
        },
        {
            "county": "Wayne County",
            "service_name": "School-Based Outreach",
            "phone": "435-893-2340",
            "contact": "Michael Murdock",
            "address": "449 North SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Wayne County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "449 N SR 118, Richfield, Utah 84701",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Canyonlands Youth Center",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 West Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Castle Country Youth Center",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon, Price, Utah 84501-0903",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Home Detention",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 S Carbon Ave., Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Home Detention",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "School Reintegration Plan",
            "phone": "435-650-0396",
            "contact": "",
            "address": "",
            "email": "rburt@utah.gov"
        },
        {
            "county": "Carbon County",
            "service_name": "School-Based Outreach",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon Ave, Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "School-Based Outreach",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Carbon County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "1395 S Carbon, Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Canyonlands Youth Center",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 West Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Castle Country Youth Center",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon, Price, Utah 84501-0903",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Home Detention",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 S Carbon Ave., Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Home Detention",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "School Reintegration Plan",
            "phone": "435-650-0396",
            "contact": "",
            "address": "",
            "email": "rburt@utah.gov"
        },
        {
            "county": "Emery County",
            "service_name": "School-Based Outreach",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon Ave, Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "School-Based Outreach",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Emery County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "1395 S Carbon, Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Canyonlands Youth Center",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 West Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Castle Country Youth Center",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon, Price, Utah 84501-0903",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Home Detention",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 S Carbon Ave., Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Home Detention",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "School Reintegration Plan",
            "phone": "435-650-0396",
            "contact": "",
            "address": "",
            "email": "rburt@utah.gov"
        },
        {
            "county": "Grand County",
            "service_name": "School-Based Outreach",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon Ave, Price, Utah 84501",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "School-Based Outreach",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Grand County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Canyonlands Youth Center",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 West Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Castle Country Youth Center",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon, Price, Utah 84501-0903",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Home Detention",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 S Carbon Ave., Price, Utah 84501",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Home Detention",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "School Reintegration Plan",
            "phone": "435-650-0396",
            "contact": "",
            "address": "",
            "email": "rburt@utah.gov"
        },
        {
            "county": "San Juan County",
            "service_name": "School-Based Outreach",
            "phone": "435-636-4720",
            "contact": "Chad Jones",
            "address": "1395 South Carbon Ave, Price, Utah 84501",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "School-Based Outreach",
            "phone": "435-678-3140",
            "contact": "Steve Bennett",
            "address": "244 W Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "San Juan County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Manu Taeoali",
            "address": "244 West Old Ruin Road, Blanding, Utah 84511",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Home Detention",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "School Reintegration Plan",
            "phone": "435-557-9475",
            "contact": "",
            "address": "",
            "email": "amanders@utah.gov"
        },
        {
            "county": "Daggett County",
            "service_name": "School-Based Outreach",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078-2708",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Split Mountain Youth Center",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078-2708",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner/p> 195 North 1950 West Salt Lake City, Utah 84116",
            "address": "",
            "email": ""
        },
        {
            "county": "Daggett County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "830 E Main Street, Vernal, Utah 84078",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Home Detention",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Darce Afuvai",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "School Reintegration Plan",
            "phone": "435-5579475",
            "contact": "",
            "address": "",
            "email": "amanders@utah.gov"
        },
        {
            "county": "Duchesne County",
            "service_name": "School-Based Outreach",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078-2708",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Split Mountain Youth Center",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078-2708",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Duchesne County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "830 E Main Street, Vernal, Utah 84078",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North , Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Case Management",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, UT 84404",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Home Detention",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-612-4914",
            "contact": "Michelle Briseno",
            "address": "1305 South 700 West, Ogden, Utah 84043",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "School Reintegration Plan",
            "phone": "435-557-9475",
            "contact": "",
            "address": "",
            "email": "amanders@utah.gov"
        },
        {
            "county": "Uintah County",
            "service_name": "School-Based Outreach",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078-2708",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Split Mountain Youth Center",
            "phone": "435-789-2045",
            "contact": "Ann Marie Anderson",
            "address": "830 East Main Street, Vernal, Utah 84078-2708",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Youth Parole Authority",
            "phone": "801-538-4331",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Uintah County",
            "service_name": "Youth Services",
            "phone": "801-538-4331",
            "contact": "Darce Afuvai",
            "address": "830 E Main Street, Vernal, Utah 84078",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Day Skills Intervention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Home Detention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Home Detention",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Iron County Youth Services",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "1692 West Harding Ave, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "Mo Amosa",
            "address": "",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "School-Based Outreach",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "School-Based Outreach",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Washington County Youth Center",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Youth Parole Authority",
            "phone": "801-430-7448",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Beaver County",
            "service_name": "Youth Services",
            "phone": "801-491-0103",
            "contact": "Manu Taeoali",
            "address": "270 E 1600 N, Cedar City, Utah 84701",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Day Skills Intervention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Home Detention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Home Detention",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Iron County Youth Services",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "1692 West Harding Ave, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "Mo Amosa",
            "address": "",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "School-Based Outreach",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "School-Based Outreach",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Washington County Youth Center",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Youth Parole Authority",
            "phone": "801-430-7448",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Iron County",
            "service_name": "Youth Services",
            "phone": "801-491-0103",
            "contact": "Manu Taeoali",
            "address": "270 E 1600 N, Cedar City, Utah 84701",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Adult Living for Transitional Achievement (ALTA)",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Case Management",
            "phone": "801-633-1943",
            "contact": "Eli Valenzuela",
            "address": "2021 S State Street, Provo, UT 84606",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Day Skills Intervention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Decker Lake Youth Center",
            "phone": "801-954-9200",
            "contact": "Meisi Collins",
            "address": "2310 West 2770 South, West Valley City, Utah 84119",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Farmington Bay Youth Center",
            "phone": "801-447-8000",
            "contact": "Jarrett Kelton",
            "address": "907 West Clark Lane, Farmington, Utah 84025",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Home Detention",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Home Detention",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "In-Home Observation and Assessment",
            "phone": "801-633-1943",
            "contact": "Vaosa Roberts",
            "address": "205 West 900 North, Springville, Utah 84663",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Iron County Youth Services",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "1692 West Harding Ave, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Mill Creek Youth Center",
            "phone": "801-334-0216",
            "contact": "Timote Havea",
            "address": "790 West 12th Street, Ogden, Utah 84404",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "School Reintegration Plan",
            "phone": "435-319-9887",
            "contact": "Mo Amosa",
            "address": "",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "School-Based Outreach",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "School-Based Outreach",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Southwest Utah Youth Center",
            "phone": "435-867-2500",
            "contact": "Cody Stratton",
            "address": "270 East 1600 North, Cedar City, Utah 84720",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Washington County Youth Center",
            "phone": "435-627-2800",
            "contact": "Barry Howard",
            "address": "330 South 5300 West, Hurricane, Utah 84737",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Youth Parole Authority",
            "phone": "801-430-7448",
            "contact": "Franz Bryner",
            "address": "195 North 1950 West, Salt Lake City, Utah 84116",
            "email": ""
        },
        {
            "county": "Washington County",
            "service_name": "Youth Services",
            "phone": "801-491-0103",
            "contact": "Manu Taeoali",
            "address": "330 S 5300 W, Hurricane, Utah 84737",
            "email": ""
        }
    ];

    // Map CSS classes (from map clicks) to JSON county names
    const countyMapping = {
        'beaver': 'Beaver County',
        'box-elder': 'Box Elder County',
        'cache': 'Cache County',
        'carbon': 'Carbon County',
        'daggett': 'Daggett County',
        'davis': 'Davis County',
        'duchesne': 'Duchesne County',
        'emery': 'Emery County',
        'garfield': 'Garfield County',
        'grand': 'Grand County',
        'iron': 'Iron County',
        'juab': 'Juab County',
        'kane': 'Kane County',
        'millard': 'Millard County',
        'morgan': 'Morgan County',
        'piute': 'Piute County',
        'rich': 'Rich County',
        'salt-lake': 'Salt Lake County',
        'san-juan': 'San Juan County',
        'sanpete': 'Sanpete County',
        'sevier': 'Sevier County',
        'summit': 'Summit County',
        'tooele': 'Tooele County',
        'uintah': 'Uintah County',
        'utah': 'Utah County',
        'wasatch': 'Wasatch County',
        'washington': 'Washington County',
        'wayne': 'Wayne County',
        'weber': 'Weber County'
    };

    console.log("Services data loaded:", servicesData.length, "entries.");

    // Handle map clicks
    $(".single-county").click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Determine which county was clicked
        let clickedClass = '';
        for (const [cls, name] of Object.entries(countyMapping)) {
            if ($(this).hasClass(cls)) {
                clickedClass = cls;
                break;
            }
        }

        if (clickedClass) {
            // Dim all counties, highlight the selected one
            $(".single-county").addClass("dimmed").removeClass("selected");
            $(this).removeClass("dimmed").addClass("selected");

            renderCounty(clickedClass);
        }
    });

    // Click on background to deselect county
    $(document).click(function (e) {
        // Don't deselect if clicking on the service cards or county links
        if ($(e.target).closest('.single-county, .list-container').length) return;

        // Animate cards out
        var cards = $('.list-container .service-card-animate');
        if (cards.length) {
            cards.removeClass('service-card-animate').addClass('service-card-exit');
            setTimeout(function () {
                $(".single-county").removeClass("dimmed selected");
                $('.list-container').html('<p class="service-card-animate" style="--i:0;">Select a county on the map to view services.</p>');
            }, 300);
        } else {
            $(".single-county").removeClass("dimmed selected");
            $('.list-container').html('<p class="service-card-animate" style="--i:0;">Select a county on the map to view services.</p>');
        }
    });

    function renderCounty(countyClass) {
        const countyName = countyMapping[countyClass];
        if (!countyName) return;

        // Filter data
        const countyServices = servicesData.filter(s => s.county === countyName);

        // Build HTML
        let html = `<div class="x-text x-content county ${countyClass}-info" style="display:block;">`;
        html += `<h3>${countyName}</h3>`;
        html += `<div class="x-row-inner services-grid">`;

        if (countyServices.length === 0) {
            html += '<p>No services found for this county.</p>';
        } else {
            countyServices.forEach((service, index) => {
                html += `
                <div class="x-col service-card-animate" style="margin-bottom: 0; --i: ${index};">
                    <div class="service-container">
                        <p class="lead-in-text mb-zero"><strong>${service.service_name}</strong></p>
                        ${service.phone ? `<p class="mb-zero"><a href="tel:${service.phone}">${service.phone}</a></p>` : ''}
                        ${service.contact ? `<p class="mb-zero">Contact: ${service.contact}</p>` : ''}
                        ${service.address ? `<p class="mb-zero">${service.address.replace(/, /g, '<br>')}</p>` : ''}
                        ${service.email ? `<p class="mb-zero"><a href="mailto:${service.email}">${service.email}</a></p>` : ''}
                    </div>
                </div>`;
            });
        }

        html += `</div></div>`;

        // Inject into the list container
        $('.list-container').html(html);

        // Scroll to the container so user sees the update
        $('html, body').animate({
            scrollTop: $(".list-container").offset().top - 100
        }, 500);
    }
});
