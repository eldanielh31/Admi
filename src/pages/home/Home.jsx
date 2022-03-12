import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(()=>["Ene", "Feb", "Mar", "Abri", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], []);

  useEffect(()=>{
    const getStats = async()=>{
      try{
        const res = await userRequest.get("/users/stats");
        res.data.map(item=>
          setUserStats(prev=>[
            ...prev,
            {name:MONTHS[item._id - 1], "Active User": item.total }
          ])
        );
      }catch(erro){
        console.log(erro);
      }
    };
    
    getStats();
  }, [MONTHS])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="Análisis de Usuario" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
