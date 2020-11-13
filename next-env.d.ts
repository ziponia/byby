/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components"
import { ThemedCssFunction } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [type as string]: any }
    size: {
      box: ThemedCssFunction
    }
  }
}
