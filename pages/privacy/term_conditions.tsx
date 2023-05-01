import React from 'react'
import { Breadcrumbs, Link, Typography } from "@mui/material";

type Props = {}

const term_conditions = (props: Props) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary-500">Breadcrumbs</Typography>
      </Breadcrumbs>
    )
}

export default term_conditions