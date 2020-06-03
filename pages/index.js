import { Grid, Image, Input, Icon, Button } from 'semantic-ui-react';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Grid className='navbar'>
        <Grid.Column width={3} className='navbar-logo--area'>
          <Image src='/assets/images/chemistryawesome.png' className='logo' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Input
            icon={<Icon name='search' inverted circular link />}
            placeholder='Search...'
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Button.Group>
            <Button className='sign-in'>Sign in</Button>
            <Button.Or />
            <Button color='blue' className='create-account'>
              Create account
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </>
  );
}
