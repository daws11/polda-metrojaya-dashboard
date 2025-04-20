"use client";
import { DashboardLayout } from "@/components/dashboard-layout";
import { TableauEmbed } from "@/components/tableau-embed";
import { TabsContent } from "@/components/ui/tabs";
import { Footer } from "@/components/footer"; 
import { ResponsiveAlert } from "@/components/responsive-alert";
import { SmallScreenIndicator } from "@/components/small-screen-indicator";

// Interface untuk data Tableau
interface TableauData {
  id: string;
  title: string;
  embedCode: string;
}

// Interface untuk koleksi data Tableau
interface TableauEmbeds {
  overview: TableauData;
  map: TableauData;
  pie: TableauData;
  bar: TableauData;
  line: TableauData;
}

export default function DashboardPage() {
  
  // Embed codes dari Tableau
  const tableauEmbeds: TableauEmbeds = {
    overview: {
      id: 'viz1745162148015',
      title: 'Dashboard Overview',
      embedCode: `<noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;PoldaMetroJaya2023CrimeDashboard&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PoldaMetroJaya2023CrimeDashboard&#47;PoldaMetroJaya2023CrimeDashboard' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;PoldaMetroJaya2023CrimeDashboard&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1745162148015');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`
    },
    map: {
      id: 'viz1745162240560',
      title: 'Peta Sebaran Kriminal',
      embedCode: `<noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;MapChart&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PoldaMetroJaya2023CrimeDashboard&#47;MapChart' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;MapChart&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1745162240560');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`
    },
    pie: {
      id: 'viz1745162282034',
      title: 'Distribusi Kriminal (Pie Chart)',
      embedCode: `<noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;PieChart&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PoldaMetroJaya2023CrimeDashboard&#47;PieChart' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;PieChart&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1745162282034');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`
    },
    bar: {
      id: 'viz1745162309719',
      title: 'Perbandingan Kriminal (Bar Chart)',
      embedCode: `<noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;BarChart&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PoldaMetroJaya2023CrimeDashboard&#47;BarChart' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;BarChart&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1745162309719');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`
    },
    line: {
      id: 'viz1745162344145',
      title: 'Tren Kriminal (Line Chart)',
      embedCode: `<noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;LineChart&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PoldaMetroJaya2023CrimeDashboard&#47;LineChart' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;PoldaMetroJaya2023CrimeDashboard&#47;LineChart&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1745162344145');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`
    }
  };

  return (
    <>
      <ResponsiveAlert />
      <SmallScreenIndicator />
      <DashboardLayout>
        <TabsContent value="overview" className="mt-6">
          <TableauEmbed 
            id={tableauEmbeds.overview.id} 
            embedCode={tableauEmbeds.overview.embedCode} 
            title={tableauEmbeds.overview.title} 
          />
        </TabsContent>
        
        <TabsContent value="map" className="mt-6">
          <TableauEmbed 
            id={tableauEmbeds.map.id} 
            embedCode={tableauEmbeds.map.embedCode} 
            title={tableauEmbeds.map.title} 
          />
        </TabsContent>
        
        <TabsContent value="pie" className="mt-6">
          <TableauEmbed 
            id={tableauEmbeds.pie.id} 
            embedCode={tableauEmbeds.pie.embedCode} 
            title={tableauEmbeds.pie.title} 
          />
        </TabsContent>
        
        <TabsContent value="bar" className="mt-6">
          <TableauEmbed 
            id={tableauEmbeds.bar.id} 
            embedCode={tableauEmbeds.bar.embedCode} 
            title={tableauEmbeds.bar.title} 
          />
        </TabsContent>
        
        <TabsContent value="line" className="mt-6">
          <TableauEmbed 
            id={tableauEmbeds.line.id} 
            embedCode={tableauEmbeds.line.embedCode} 
            title={tableauEmbeds.line.title} 
          />
        </TabsContent>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TableauEmbed 
              id={`${tableauEmbeds.map.id}-all`} 
              embedCode={tableauEmbeds.map.embedCode} 
              title={tableauEmbeds.map.title} 
            />
            <TableauEmbed 
              id={`${tableauEmbeds.pie.id}-all`} 
              embedCode={tableauEmbeds.pie.embedCode} 
              title={tableauEmbeds.pie.title} 
            />
            <TableauEmbed 
              id={`${tableauEmbeds.bar.id}-all`} 
              embedCode={tableauEmbeds.bar.embedCode} 
              title={tableauEmbeds.bar.title} 
            />
            <TableauEmbed 
              id={`${tableauEmbeds.line.id}-all`} 
              embedCode={tableauEmbeds.line.embedCode} 
              title={tableauEmbeds.line.title} 
            />
          </div>
        </TabsContent>
      </DashboardLayout>
      <Footer />
    </>
  );
}