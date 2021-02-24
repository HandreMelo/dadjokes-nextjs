import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

const Topbar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Bad Jokes</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" defaultValue={props.searchTerm} name='term' className="mr-sm-2" />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
        </Navbar>
    )
}
export default Topbar
//functional component