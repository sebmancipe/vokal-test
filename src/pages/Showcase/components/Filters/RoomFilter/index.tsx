import { useEffect, useState } from 'react';
import { Select, MenuItem, Checkbox, ListItemText, SelectChangeEvent } from '@mui/material';
import {Room } from '../../types';
import { useFilters } from '../../../hooks/useFilters';

const rooms = [
    { name: 'KITCHEN', value: Room.KITCHEN },
    { name: 'LIVING ROOM', value: Room.LIVING_ROOM },
    { name: 'OFFICE', value:Room.OFFICE },
];

export const RoomFilter = () => {
    const [selectedRooms, setSelectedRooms] = useState([Room.KITCHEN]);
    const { filters, toggleRoom } = useFilters();

    useEffect(() => {
        setSelectedRooms(Array.from(filters.rooms));
    }, [filters]);

    const handleChange = (event: SelectChangeEvent<Room[]>) => {
        const {
            target: { value },
        } = event;
        const roomsNames = (typeof value === 'string' ? value.split(',') : value) as Room[];
        

        if(!roomsNames.length){
            roomsNames.push(Room.KITCHEN);
        }

        let difference: Room[] = [];
        if(removedARoom(roomsNames, selectedRooms)) {
            difference = selectedRooms.filter(room => !roomsNames.includes(room));
        } else {
            difference = roomsNames.filter(room => !selectedRooms.includes(room));
        }

        difference.forEach(room => toggleRoom(room));
        setSelectedRooms(roomsNames);
    };

    const removedARoom = (currentRooms: Room[], selectedRooms: Room[]) => {
        return currentRooms.length < selectedRooms.length;
    }

    return (
            <Select
                multiple
                displayEmpty
                value={selectedRooms}
                onChange={handleChange}
                renderValue={(selected) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {selected.join(', ').replace('_', ' ')}
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
                {rooms.map((room) => (
                    <MenuItem key={room.name} value={room.value}>
                        <Checkbox checked={selectedRooms.indexOf(room.value) > -1} />
                        <ListItemText primary={room.name} sx={{ fontFamily: 'Inter' }}/>
                    </MenuItem>
                ))}
            </Select>
    );
}