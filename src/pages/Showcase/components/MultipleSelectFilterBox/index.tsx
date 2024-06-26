import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  Chip,
  ListItemText,
  Checkbox,
  OutlinedInput
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Color {
  name: string;
  hex: string;
}

const colors: Color[] = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#000000' },
  // Add more colors as needed
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ColorFilter: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedColors>) => {
    const {
      target: { value },
    } = event;
    setSelectedColors(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="color-filter-label">Colors</InputLabel>
      <Select
        labelId="color-filter-label"
        id="color-filter"
        multiple
        value={selectedColors}
        onChange={handleChange}
        input={<OutlinedInput label="Colors" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => {
              const color = colors.find(c => c.name === value);
              return (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    backgroundColor: color?.hex,
                    color: color?.name === 'White' ? 'black' : 'white',
                  }}
                />
              );
            })}
          </Box>
        )}
        MenuProps={MenuProps}
        IconComponent={ArrowDropDownIcon}
      >
        {colors.map((color) => (
          <MenuItem key={color.name} value={color.name}>
            <Checkbox checked={selectedColors.indexOf(color.name) > -1} />
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: color.hex,
                marginRight: 2,
              }}
            />
            <ListItemText primary={color.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColorFilter;
