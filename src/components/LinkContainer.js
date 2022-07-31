import React from 'react';
import { BoxedContainer } from './LinkContainerStyles';
import { Button } from './BannerStyles';
import Form from 'react-bootstrap/Form';
export default function LinkContainer() {
  return (
    <div>
<BoxedContainer>
    <Form role="search" style={{ position:"relative", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", alignItems: "stretch" }}>
    <label for="search" style={{  position: "absolute", clip: "rect(1px, 1px, 1px, 1px)", padding: "0", border: "0", height: "1px", width: "1px", overflow: "hidden" }}>Search for stuff</label>
      <input id="search" type="search"  placeholder="Shorten a link here" style={{ width:"80%%", padding:"6px 13.5rem" }} />
    </Form>
    <Button>Shorten It</Button>

</BoxedContainer>

    </div>
  )
}
