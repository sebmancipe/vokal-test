import { useEffect, useState } from 'react';
import { Select, MenuItem, Checkbox, ListItemText, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/system';
import { Color } from '../../types';
import { useFilters } from '../../../hooks/useFilters';


const ColorCircle = styled('span')(({ color }) => ({
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: 10,
}));

const colors = [
    { name: Color.BLUE, color: 'blue' },
    { name: Color.WHITE, color: '#D9D9D9' },
    { name: Color.BLACK, color: 'black' },
];

export const ColorFilter = () => {
    const [selectedColors, setSelectedColors] = useState([Color.WHITE]);
    const { filters, toggleColor } = useFilters();

    useEffect(() => {
        setSelectedColors(Array.from(filters.colors));
    }, [filters]);


    const handleChange = (event: SelectChangeEvent<Color[]>) => {
        const {
            target: { value },
        } = event;
        const colorsNames = (typeof value === 'string' ? value.split(',') : value) as Color[];
        
        if(!colorsNames.length){
            colorsNames.push(Color.WHITE);
        }

        let difference: Color[] = [];
        if(removedAColor(colorsNames, selectedColors)) {
            difference = selectedColors.filter(color => !colorsNames.includes(color));
        } else {
            difference = colorsNames.filter(color => !selectedColors.includes(color));
        }

        difference.forEach(color => toggleColor(color));
        setSelectedColors(colorsNames);
    };

    const removedAColor = (currentColors: Color[], selectedColors: Color[]) => {
        return currentColors.length < selectedColors.length;
    }

    return (
            <Select
                multiple
                displayEmpty
                value={selectedColors}
                onChange={handleChange}
                renderValue={(selected) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ColorCircle color={colors.find(c => c.name === selected[0])?.color || '#D9D9D9'} />
                        {selected.join(', ')}
                    </div>
                )}
                sx={{
                    minWidth: 200,
                    bgcolor: '#FAF9F6',
                    '& .MuiSelect-icon': {
                        color: 'black',
                    },
                    borderRadius: '0px',
                }}
            >
                {colors.map((color) => (
                    <MenuItem key={color.name} value={color.name}>
                        <Checkbox checked={selectedColors.indexOf(color.name) > -1} />
                        <ColorCircle color={color.color} />
                        <ListItemText primary={color.name} sx={{ fontFamily: 'Inter' }}/>
                    </MenuItem>
                ))}
            </Select>
    );
}