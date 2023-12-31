import React from 'react'
import { styled, Box } from '@mui/system'
import { H6 } from 'app/components/Typography'
import { Tooltip, IconButton, Icon } from '@mui/material'
import { navigate } from 'react-big-calendar/lib/utils/constants'

const CalenderHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    padding: '4px 0px',
    justifyContent: 'space-around',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    background: theme.palette.primary.main,
}))

const viewNameListObject = {
    month: {
        name: 'Month',
        icon: 'view_module',
    },
    week: {
        name: 'Week',
        icon: 'view_week',
    },
    work_week: {
        name: 'Work week',
        icon: 'view_array',
    },
    day: {
        name: 'Day',
        icon: 'view_day',
    },
    agenda: {
        name: 'Agenda',
        icon: 'view_agenda',
    },
}

const CalendarHeader = (props) => {
    const {
        views: viewNameList,
        view: currentView,
        label,
        onView,
        onNavigate,
    } = props

    const renderViewButtons = () => {
        if (viewNameList.length > 1) {
            return viewNameList.map((view) => (
                <IconButton
                    key={view}
                    size="large"
                    aria-label={view}
                    onClick={() => onView(view)}
                    disabled={currentView === view}
                >
                    <Tooltip title={viewNameListObject[view].name}>
                        <Icon sx={{ color: '#fff' }}>
                            {viewNameListObject[view].icon}
                        </Icon>
                    </Tooltip>
                </IconButton>
            ))
        }
    }

    return (
        <CalenderHeader>
            <Box display="flex" justifyContent="center">
                <IconButton
                    size="large"
                    onClick={() => onNavigate(navigate.PREVIOUS)}
                >
                    <Tooltip title="Previous">
                        <Icon sx={{ color: '#fff' }}>chevron_left</Icon>
                    </Tooltip>
                </IconButton>

                <IconButton
                    size="large"
                    onClick={() => onNavigate(navigate.TODAY)}
                >
                    <Tooltip title="Today">
                        <Icon sx={{ color: '#fff' }}>today</Icon>
                    </Tooltip>
                </IconButton>

                <IconButton
                    size="large"
                    onClick={() => onNavigate(navigate.NEXT)}
                >
                    <Tooltip title="Next">
                        <Icon sx={{ color: '#fff' }}>chevron_right</Icon>
                    </Tooltip>
                </IconButton>
            </Box>

            <Box display="flex" alignItems="center">
                <H6 sx={{ color: '#fff' }}>{label}</H6>
            </Box>

            <Box display="flex">{renderViewButtons()}</Box>
        </CalenderHeader>
    )
}

export default CalendarHeader
