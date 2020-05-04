import React, { useState } from "react";

import { Person } from "../../content/types";

interface Props {
    founder: Person,
    close(): void,
}

export function Founder({founder}: Props) {
    return <>{founder.name}</>
}