import React from "react";
import {Button, ButtonGroup, Container, Grid} from "@material-ui/core";

const TodoFilter: React.FC = () => {
    return(
        <Container>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    <Button>
                        All
                    </Button>
                    <Button>
                        Done
                    </Button>
                    <Button>
                        Undone
                    </Button>
                </ButtonGroup>
            </Grid>
        </Container>
    )
}

export default TodoFilter