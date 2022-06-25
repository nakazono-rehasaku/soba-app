import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import StickyHeadTable from 'src/components/Table';

const Home: NextPage = () => {
  const onClickHandler = () => {
    console.log('you are so great!!');
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button variant='contained' onClick={onClickHandler}>
        Click Me
      </Button>
      <br />
      <br />
      <br />
      <StickyHeadTable />
    </>
  );
};

export default Home;
