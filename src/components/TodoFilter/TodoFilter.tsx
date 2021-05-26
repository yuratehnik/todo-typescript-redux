import React from "react";
import {Box, Button, ButtonGroup, Container, Grid} from "@material-ui/core";
import {useFilter} from "../../context/filterContext";
import {FILTER_ALL, FILTER_DONE, FILTER_UNDONE} from "../../context/filterStates";

const TodoFilter: React.FC = () => {
    const {setFilter} = useFilter();

    return(
        <Container>
            <Box m={2} />
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
                    <Button onClick={()=>{setFilter(FILTER_ALL)}}>
                        All
                    </Button>
                    <Button onClick={()=>{setFilter(FILTER_DONE)}}>
                        Done
                    </Button>
                    <Button onClick={()=>{setFilter(FILTER_UNDONE)}}>
                        Undone
                    </Button>
                </ButtonGroup>
            </Grid>
        </Container>
    )
}

export default TodoFilter