import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

type SimpleGridProps = {
    container?: boolean;
    item?: boolean;
    xs?: number;
    md?: number;
    spacing?: number; // MUI spacing units (8px)
    justifyContent?: React.CSSProperties['justifyContent'];
    alignItems?: React.CSSProperties['alignItems'];
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SimpleGrid(props: SimpleGridProps) {
    const { container, item, xs, md, spacing, justifyContent, alignItems, children, sx, ...rest } = props;

    // width calculation for item: percentage based on 12-column grid
    const widthStyles: SxProps<Theme> = item
        ? {
              width: {
                  xs: `${(xs ? (xs / 12) * 100 : 100)}%`,
                  md: `${(md ? (md / 12) * 100 : xs ? (xs / 12) * 100 : 100)}%`,
              },
          }
        : {};

    const containerStyles: SxProps<Theme> = container
        ? {
              display: 'flex',
              flexWrap: 'wrap',
              gap: spacing ? `${spacing * 8}px` : undefined,
              justifyContent,
              alignItems,
          }
        : {};

    return (
        <Box component="div" sx={{ boxSizing: 'border-box', ...containerStyles, ...widthStyles, ...sx }} {...rest}>
            {children}
        </Box>
    );
}
