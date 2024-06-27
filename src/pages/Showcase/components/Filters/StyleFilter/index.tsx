import { useEffect, useState } from 'react';
import { Select, MenuItem, Checkbox, ListItemText, SelectChangeEvent } from '@mui/material';
import { Style } from '../../types';
import { useFilters } from '../../../hooks/useFilters';


const styles = [
    { name: Style.MODERN },
    { name: Style.TRADITIONAL },
];

export const StyleFilter = () => {
    const [selectedStyle, setSelectedStyle] = useState(Style.MODERN);
    const { filters, setStyle } = useFilters();

    useEffect(() => {
        setSelectedStyle(filters.style);
    }, [filters]);

    const handleChange = (event: SelectChangeEvent<Style>) => {
        const {
            target: { value },
        } = event;
        setSelectedStyle(value as Style);
        setStyle(value as Style);
    };

    return (
            <Select
                displayEmpty
                value={selectedStyle}
                onChange={handleChange}
                renderValue={(selected) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {selected}
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
                {styles.map((style) => (
                    <MenuItem key={style.name} value={style.name}>
                        <Checkbox checked={selectedStyle === style.name} />
                        <ListItemText primary={style.name} sx={{ fontFamily: 'Inter' }}/>
                    </MenuItem>
                ))}
            </Select>
    );
}