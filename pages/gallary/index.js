
import React from 'react';
import Gallary from '../../components/Gallary/Gallary'

const index = ({data}) => {
    return (
        <div>
          <Gallary data={data}/>
        </div>
    );
};

export default index;
export async function getStaticProps() {
    const fs = require("fs/promises");
    const path = require("path");
    const filePath = path.join(process.cwd(), '/data', '/data.json');
  
    let data = await fs.readFile(filePath);
    data = JSON.parse(data);
  
    return {
      props: {
        data: data.data
      }
    }
  }
  