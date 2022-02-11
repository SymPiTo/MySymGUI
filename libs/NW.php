<?php

/**
 * DebugHelper ergänzt SendDebug um die Möglichkeit Array und Objekte auszugeben.
 *
 */
trait MyDebugHelper4
{

    /**
     * Ergänzt SendDebug um die Möglichkeit Objekte und Array auszugeben.
     *
  
     */
    protected function SendDebug($Message, $Data, $Format)
    {
        if (is_object($Data)) {
            foreach ($Data as $Key => $DebugData) {
                $this->SendDebug($Message . ":" . $Key, $DebugData, 0);
            }
        } elseif (is_array($Data)) {
            foreach ($Data as $Key => $DebugData) {
                $this->SendDebug($Message . ":" . $Key, $DebugData, 0);
            }
        } else {
            if (is_bool($Data)) {
                parent::SendDebug($Message, ($Data ? 'true' : 'false'), 0);
            } else {
                parent::SendDebug($Message, (string) $Data, $Format);
            }
        }
    }
}



