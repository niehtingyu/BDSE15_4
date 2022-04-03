# **BDSE15_4 Project**
## **2019, 2020 Global Airports Flights Analysis**
`The Repository Just for Learning and Presenting`<br/>
`Collaborators: Timmy, Yujui, Momofish, Ula, Vicki, Jessie`


* **Presentation Link:**
  * please visit: https://youtu.be/gLeU625uakc?t=8613


* **Data Sets:**
  * OpenSky COVID-19 Flight Dataset: https://zenodo.org/record/4419079#.YBkxjehKhPY
  * Global Surface Summary of the Day: https://www.ncei.noaa.gov/data/global-summary-of-the-day/access/
  * ICAO Table: organized as **ICAO.csv**, and stored in **data** folder


* **Repository Folders:**
  * **slides** folder contains pdf files for Hadoop constructing and project presenting
  * **docs** folder contains files for data visualizing, please visit: https://niehtingyu.github.io/BDSE15_4/
  * **data** folder contains files for data analyzing, please read the following description


* **Step 1 - Data Downloading**
  * Fortunately, our data sets could be downloaded directly. Simply use Requests and BeautifulSoup4 could finish the step. See **globalSurface_download.ipynb**.


* **Step 2 - Data Preprocessing**
  * It was the most complicated step. We established Hadoop, Spark ecosystem to tackle these big data sets, and used PySpark, Koalas under Docker container to test and condense them. We activated Spark by bash script, **pysparklab.sh**, and run **integrate_airport_table.ipynb**, **integrate_station_table.ipynb**. Finally, we could just use Pandas on a single PC to run **merge_table.ipynb**. See **2019_table.csv**, **2020_table.csv**, the condensed data tables.


* **Step 3 - Data Exploring**
  * We manually tried several data analyzing methods on this step. **2019_table_calculate.csv** and **2020_table_calculate.csv** were yielded during the period. **airports_clustering.ipynb** with Scikit-Learn was the template for us to try unsupervised machine learning.


* **Step 4 - Data Analyzing**
  * We developed three topics for analysis after data exploring. See **airports_clustering_analysis.ipynb** for detailed information, and **2019_table_calculate_clustering.csv** for our airports clustering decision.
  * Topic one shows the change of worldwide flights numbers, rates between 2019 and 2020. See **2019_table_calculate_country.csv**, **2020_table_calculate_country.csv** and **country_change_rate.csv**.
  * Topic two shows the four airport clusters between 2019 and 2020. We also manually yielded **describe_clustering.xlsx** to explore the clustering results.
  * Topic three shows airport change rates between 2019 and 2020. We were also interested in how these clusters would be under 2020 COVID-19 pandemic. See **airport_change_rate.csv** for the answer.


* **Step 5 - Data Visualizing**
  * Template - Start Bootstrap - SB Admin: https://github.com/startbootstrap/startbootstrap-sb-admin
  * D3.js Template: https://www.d3-graph-gallery.com/
  * Made the previously mentioned three topics shown on website, and presented the project with both slides and the website: https://niehtingyu.github.io/BDSE15_4/
