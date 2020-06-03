import Link from 'next/link';
import { Grid, Image, Button, Input, Icon } from 'semantic-ui-react';

const Navbar = () => (
  <>
    <Grid className='navbar' textAlign='center'>
      <Grid.Column width={3}>
        <Link href='/'>
          <a>
            <Image src='/assets/images/logo.svg' className='logo' />
          </a>
        </Link>
      </Grid.Column>
      <Grid.Column width={10}>
        <Input
          icon={<Icon name='search' inverted circular link />}
          placeholder='Tìm kiếm Bài tập, Đề thi, Đề ôn tập ...'
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <Button.Group>
          <Button className='sign-in'> Sign in </Button> <Button.Or />
          <Button color='blue' className='create-account'>
            Create account
          </Button>
        </Button.Group>
      </Grid.Column>
    </Grid>
  </>
);

export default Navbar;
